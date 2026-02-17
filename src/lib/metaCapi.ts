import crypto from "node:crypto";

export type MetaLeadUserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbp?: string;
  fbc?: string;
};

function normalizeEmail(v?: string) {
  return (v || "").trim().toLowerCase();
}

function normalizePhone(v?: string) {
  // Keep digits only, best-effort (Meta accepts E164 hashed; we do digits-only as fallback)
  return (v || "").replace(/\D+/g, "");
}

function sha256(v: string) {
  return crypto.createHash("sha256").update(v).digest("hex");
}

function hashIfPresent(v: string | undefined, normalizer: (s: string) => string) {
  const n = normalizer(v || "");
  if (!n) return undefined;
  return sha256(n);
}

export async function sendMetaLeadEvent(params: {
  pixelId: string;
  accessToken: string;
  eventId: string;
  eventSourceUrl: string;
  userData: MetaLeadUserData;
}): Promise<{ ok: boolean; meta?: any; error?: string }> {
  const { pixelId, accessToken, eventId, eventSourceUrl, userData } = params;

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: eventSourceUrl,
        event_id: eventId,
        user_data: {
          em: [hashIfPresent(userData.email, normalizeEmail)].filter(Boolean),
          ph: [hashIfPresent(userData.phone, normalizePhone)].filter(Boolean),
          fn: [hashIfPresent(userData.firstName, (s) => s.trim().toLowerCase())].filter(Boolean),
          ln: [hashIfPresent(userData.lastName, (s) => s.trim().toLowerCase())].filter(Boolean),
          client_ip_address: userData.clientIpAddress,
          client_user_agent: userData.clientUserAgent,
          fbp: userData.fbp,
          fbc: userData.fbc,
        },
        custom_data: {
          content_name: "contact_form",
        },
      },
    ],
  };

  try {
    const res = await fetch(`https://graph.facebook.com/v24.0/${pixelId}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Next.js route: avoid caching
      cache: "no-store",
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: `Meta CAPI HTTP ${res.status}`, meta: json };
    }
    return { ok: true, meta: json };
  } catch (e: any) {
    return { ok: false, error: e?.message || String(e) };
  }
}
