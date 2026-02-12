import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { whoWeAre } from "@/lib/content";

export function WhoWeAre({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <FadeInView direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-3">
              {whoWeAre.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy">
              {whoWeAre.title}
            </h2>
            <p className="mt-5 text-text-secondary leading-relaxed">
              {whoWeAre.body}
            </p>
            <button
              onClick={onOpenContact}
              className="btn-shine mt-6 inline-flex items-center px-6 py-3 bg-charcoal text-white font-semibold rounded-full text-sm transition-all duration-150 hover:-translate-y-px hover:shadow-lg"
            >
              {whoWeAre.cta}
            </button>
          </FadeInView>

          {/* Photo */}
          <FadeInView direction="right" delay={0.15}>
            <div className="flex justify-center">
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/founder.png"
                  alt="CenturySync Studio team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
