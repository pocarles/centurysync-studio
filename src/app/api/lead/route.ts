import { NextResponse } from "next/server";
import { WEBHOOK_URL, SITE_URL } from "@/lib/constants";
import { sendMetaLeadEvent } from "@/lib/metaCapi";

export const runtime = "nodejs";

function getClientIp(req: Request) {
  // Vercel / proxies: best-effort
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || undefined;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const eventId = body.eventId || crypto.randomUUID();

  // 1) Forward lead to your existing n8n webhook (source of truth)
  const leadPayload = {
    ...body,
    source: body.source || "studio.centurysync.com",
    submittedAt: body.submittedAt || new Date().toISOString(),
    eventId,
  };

  const webhookRes = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadPayload),
    cache: "no-store",
  });

  if (!webhookRes.ok) {
    return NextResponse.json({ ok: false, error: "Lead webhook failed" }, { status: 502 });
  }

  // 2) Conversions API (so Meta sees Leads even when browser tracking is blocked)
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "791126243089462";
  const capiToken = process.env.META_CONVERSIONS_API_TOKEN;

  let meta: any = null;
  if (capiToken) {
    const url = req.headers.get("referer") || SITE_URL;
    const ua = req.headers.get("user-agent") || undefined;

    // Cookies (_fbp/_fbc) are helpful for matching
    const cookie = req.headers.get("cookie") || "";
    const fbp = (cookie.match(/(?:^|;\s*)_fbp=([^;]+)/) || [])[1];
    const fbc = (cookie.match(/(?:^|;\s*)_fbc=([^;]+)/) || [])[1];

    meta = await sendMetaLeadEvent({
      pixelId,
      accessToken: capiToken,
      eventId,
      eventSourceUrl: url,
      userData: {
        email: body.email,
        phone: body.phone,
        firstName: body.firstName,
        lastName: body.lastName,
        company: body.company,
        clientIpAddress: getClientIp(req),
        clientUserAgent: ua,
        fbp,
        fbc,
      },
    });
  }

  return NextResponse.json({ ok: true, eventId, meta });
}
