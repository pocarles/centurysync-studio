import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeInView } from "@/components/motion/FadeInView";
import { trustedBySoftr } from "@/lib/content";

export function TrustedBySoftr({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <FadeInView className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/softr-badge.svg"
              alt="Softr Certified Partner"
              width={160}
              height={60}
              className="h-14 w-auto"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy">
            {trustedBySoftr.title}
          </h2>

          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {trustedBySoftr.description}
          </p>

          <button
            onClick={onOpenContact}
            className="btn-shine mt-8 inline-flex items-center px-8 py-4 bg-charcoal text-white font-semibold rounded-full text-base transition-all duration-150 hover:-translate-y-px hover:shadow-lg"
          >
            {trustedBySoftr.cta}
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
      </Container>
    </section>
  );
}
