import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { techPartners } from "@/lib/content";

export function TechPartners() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          title={techPartners.title}
          subtitle={techPartners.subtitle}
        />

        <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {techPartners.logos.map((logo) => (
            <StaggerItem key={logo.name}>
              <div className="flex items-center justify-center h-10 px-4 opacity-40 hover:opacity-100 transition-opacity duration-200">
                <Image
                  src={`/images/partners/${logo.file}`}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
