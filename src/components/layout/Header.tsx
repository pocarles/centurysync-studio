"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export function Header({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/images/logo.png"
              alt="CenturySync Studio"
              width={36}
              height={36}
              className="h-9 w-9 transition-transform duration-150 group-hover:scale-105"
              priority
            />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-terracotta">Century</span>
              <span className="text-navy">Sync</span>
              <span className="text-text-muted ml-1 font-medium text-sm">
                Studio
              </span>
            </span>
          </a>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="btn-shine inline-flex items-center px-5 py-2.5 bg-charcoal text-white font-semibold rounded-full text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2.5 rounded-xl hover:bg-cream-dark transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden overflow-hidden border-t border-border-light"
          >
            <div className="glass px-6 py-4">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 bg-charcoal text-white font-semibold rounded-xl text-center transition-colors hover:bg-navy"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
