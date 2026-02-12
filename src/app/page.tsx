"use client";

import { useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { TechPartners } from "@/components/sections/TechPartners";
import { Services } from "@/components/sections/Services";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { IndustryFocus } from "@/components/sections/IndustryFocus";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBySoftr } from "@/components/sections/TrustedBySoftr";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Header onOpenContact={scrollToContact} />
      <main>
        <Hero onOpenContact={scrollToContact} />
        <WhoWeAre onOpenContact={scrollToContact} />
        <TechPartners />
        <TrustedBySoftr onOpenContact={scrollToContact} />
        <Services onOpenContact={scrollToContact} />
        <HowWeWork />
        <IndustryFocus />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
