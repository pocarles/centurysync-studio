"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

const avatars = [
  "/images/testimonial-1.jpg",
  "/images/testimonial-2.jpg",
  "/images/testimonial-3.jpg",
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const items = testimonials.items;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label={testimonials.label}
          title={testimonials.title}
        />

        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote */}
          <div className="min-h-[280px] flex items-center rounded-2xl bg-terracotta/[0.03] px-8 py-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-navy leading-relaxed italic">
                  &ldquo;{items[current].quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center justify-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-cream-dark">
                    <Image
                      src={avatars[current]}
                      alt={items[current].name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-navy text-sm">
                      {items[current].name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {items[current].role}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-8 bg-terracotta"
                    : "w-2.5 bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
