"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { TechPartners } from "@/components/sections/TechPartners";
import { Services } from "@/components/sections/Services";
import { IndustryFocus } from "@/components/sections/IndustryFocus";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBySoftr } from "@/components/sections/TrustedBySoftr";
import { ContactModal } from "@/components/ui/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Header onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <WhoWeAre onOpenContact={openContact} />
        <TechPartners />
        <Services onOpenContact={openContact} />
        <IndustryFocus />
        <Testimonials />
        <TrustedBySoftr onOpenContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
