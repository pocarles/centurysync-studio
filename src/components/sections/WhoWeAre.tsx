import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { whoWeAre } from "@/lib/content";

export function WhoWeAre({ onOpenContact }: { onOpenContact: () => void }) {
  const paragraphs = whoWeAre.body.split("\n\n");

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        {/* Section intro — full width for the long title to breathe */}
        <FadeInView>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-4">
              {whoWeAre.label}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-navy leading-[1.3]">
              {whoWeAre.title}
            </h2>
          </div>
        </FadeInView>

        {/* Two-column: text + photo */}
        <div className="mt-10 md:mt-14 grid gap-12 lg:gap-20 md:grid-cols-[1fr_auto] items-start">
          {/* Text column */}
          <FadeInView direction="up" delay={0.1}>
            <div className="space-y-5 text-text-secondary leading-relaxed font-light max-w-xl">
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <button
              onClick={onOpenContact}
              className="btn-shine mt-10 inline-flex items-center px-6 py-3 bg-charcoal text-white font-semibold rounded-full text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
            >
              {whoWeAre.cta}
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
          </FadeInView>

          {/* Photo column — tall portrait, properly sized */}
          <FadeInView direction="up" delay={0.2}>
            <div className="relative w-full md:w-72 lg:w-80 xl:w-[22rem] md:sticky md:top-28">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/founder.png"
                  alt="Pierre-Olivier Carles and the CenturySync Studio team"
                  width={1080}
                  height={1920}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 352px"
                  priority
                />
              </div>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
