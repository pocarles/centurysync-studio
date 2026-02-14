"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { WEBHOOK_URL, CONTACT } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    const form = formRef.current!;
    const data = new FormData(form);

    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone") || "",
      company: data.get("company"),
      message: data.get("message"),
      source: "studio.centurysync.com",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "contact_form",
        });
      }
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="max-w-2xl mx-auto">
          <FadeInView>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-3">
                Get started
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
                Tell us about your business
              </h2>
              <p className="mt-3 text-text-secondary">
                We&apos;ll get back to you within 24 hours.
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Based in West Palm Beach. We meet local clients in person.
              </p>
            </div>

            {state === "success" ? (
              <div className="py-12 text-center rounded-2xl border border-border-light bg-white">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-navy text-lg">Thank you!</p>
                <p className="text-sm text-text-muted mt-1">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border-light bg-white p-8 md:p-10 shadow-sm"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      First Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="Pierre-Olivier"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      Last Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="Carles"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      Email <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-1"
                  >
                    How can we help? <span className="text-terracotta">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your business challenge..."
                  />
                </div>

                {state === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or call us at{" "}
                    {CONTACT.phone}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="btn-shine w-full py-3 bg-charcoal text-white font-semibold rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {state === "submitting" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
