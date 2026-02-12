import { AnimateOnLoad } from "@/components/motion/AnimateOnLoad";
import { Container } from "@/components/layout/Container";
import { hero } from "@/lib/content";

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #152237 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnLoad delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.1]">
              {hero.headline}
            </h1>
          </AnimateOnLoad>

          <AnimateOnLoad delay={0.25}>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto">
              {hero.subheadline}
            </p>
          </AnimateOnLoad>

          <AnimateOnLoad delay={0.4}>
            <button
              onClick={onOpenContact}
              className="btn-shine mt-8 inline-flex items-center px-8 py-4 bg-charcoal text-white font-semibold rounded-full text-base transition-all duration-150 hover:-translate-y-px hover:shadow-lg"
            >
              {hero.cta}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </AnimateOnLoad>
        </div>
      </Container>
    </section>
  );
}
