"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEBHOOK_URL, CONTACT } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [state, setState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & escape
  useEffect(() => {
    if (!open) return;
    setState("idle");

    const timer = setTimeout(() => firstInputRef.current?.focus(), 100);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    const form = formRef.current!;
    const data = new FormData(form);

    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
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
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full max-w-lg bg-cream rounded-2xl shadow-2xl p-6 md:p-8"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-navy hover:bg-cream-dark transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-navy mb-1">Get Started</h2>
            <p className="text-sm text-text-muted mb-6">
              Tell us about your business. We&apos;ll get back to you within 24 hours.
            </p>

            {state === "success" ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-navy">Thank you!</p>
                <p className="text-sm text-text-muted mt-1">We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-1">
                      First Name
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-white text-navy placeholder-text-muted text-sm focus:border-terracotta focus:outline-none transition-colors"
                      placeholder="Pierre-Olivier"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-1">
                      Last Name
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
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                    Email
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
                  <label htmlFor="company" className="block text-sm font-medium text-navy mb-1">
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
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
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
