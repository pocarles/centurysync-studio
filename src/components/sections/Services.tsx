import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";
import { services } from "@/lib/content";

const icons = {
  unlock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
} as const;

export function Services({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title={services.title}
          subtitle={services.subtitle}
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-3">
          {services.items.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-4">
                  {icons[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <button
                  onClick={onOpenContact}
                  className="mt-5 text-sm font-semibold text-terracotta hover:text-terracotta-dark transition-colors inline-flex items-center gap-1"
                >
                  Get Started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
