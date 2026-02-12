import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { services } from "@/lib/content";

export function Services({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          label={services.label}
          title={services.title}
          subtitle={services.subtitle}
        />

        <StaggerChildren className="grid gap-8 md:grid-cols-3">
          {services.items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-hover group h-full rounded-2xl border border-border-light bg-white overflow-hidden shadow-sm hover:border-terracotta/15">
                <div className="overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1567}
                    height={911}
                    className="w-full h-auto transition-transform duration-[1500ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                  <button
                    onClick={onOpenContact}
                    className="mt-5 text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    Get Started
                    <svg
                      className="w-3.5 h-3.5"
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
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
