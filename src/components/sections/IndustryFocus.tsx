import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { industryFocus } from "@/lib/content";

export function IndustryFocus() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <Container>
        <SectionHeading
          label={industryFocus.label}
          title={industryFocus.title}
        />

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industryFocus.items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="card-hover group h-full rounded-2xl border border-border-light bg-white overflow-hidden shadow-sm hover:border-terracotta/15">
                <div className="overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1567}
                    height={911}
                    className="w-full h-auto transition-transform duration-[1500ms] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
