import { FadeInView } from "@/components/motion/FadeInView";

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeInView className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </FadeInView>
  );
}
