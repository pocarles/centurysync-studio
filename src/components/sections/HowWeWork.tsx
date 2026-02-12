import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInView } from "@/components/motion/FadeInView";
import { howWeWork } from "@/lib/content";

export function HowWeWork() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label={howWeWork.label}
          title={howWeWork.title}
          subtitle={howWeWork.subtitle}
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-light hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {howWeWork.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.title} className="relative">
                  {/* Step number on timeline */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-10 h-10 rounded-full border-2 border-terracotta/30 bg-cream items-center justify-center">
                    <span className="text-sm font-semibold text-terracotta">
                      {i + 1}
                    </span>
                  </div>

                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                      isEven ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* Image */}
                    <FadeInView
                      direction={isEven ? "left" : "right"}
                      className={isEven ? "" : "md:[direction:ltr]"}
                    >
                      <div className="overflow-hidden rounded-lg shadow-sm">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={1168}
                          height={784}
                          className="w-full h-auto"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </FadeInView>

                    {/* Text */}
                    <FadeInView
                      direction={isEven ? "right" : "left"}
                      delay={0.1}
                      className={isEven ? "" : "md:[direction:ltr]"}
                    >
                      {/* Mobile step number */}
                      <div className="md:hidden flex w-8 h-8 rounded-full border-2 border-terracotta/30 bg-cream items-center justify-center mb-4">
                        <span className="text-xs font-semibold text-terracotta">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed font-light">
                        {step.description}
                      </p>
                    </FadeInView>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
