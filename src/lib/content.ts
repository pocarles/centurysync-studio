export const hero = {
  headline: "We build AI systems that augment your business",
  subheadline:
    "Business-driven workflows, strengthened by intentional AI.",
  cta: "Get Started",
} as const;

export const whoWeAre = {
  label: "Who we are",
  title: "A small, focused tech elite team",
  body: "Led by Pierre-Olivier Carles, a founder with 25 years of real business experience — not just tech, but operations, manufacturing, and scaling companies from zero. We don't chase trends. We go deep, build strong foundations, and design technology that serves real business outcomes. Every system we build is intentional: no bloat, no gimmicks, just tools that make your team faster and your operations sharper.",
  cta: "Get Started",
} as const;

export const techPartners = {
  title: "Technologies we use with intention",
  subtitle:
    "Advanced systems, used only where they create real value.",
  logos: [
    { name: "Claude", file: "claude.png" },
    { name: "OpenAI", file: "openai.png" },
    { name: "Gemini", file: "gemini.png" },
    { name: "Pinecone", file: "pinecone.png" },
    { name: "n8n", file: "n8n.png" },
    { name: "Softr", file: "softr.png" },
  ],
} as const;

export const services = {
  title: "How we help your business grow",
  subtitle:
    "Sharper operations, smoother processes, and AI used with discipline.",
  items: [
    {
      title: "Unlock the levers hidden in your operations",
      description:
        "Most companies grow faster than their processes. We map your workflows, identify the friction, and build AI-powered systems that unlock speed and precision where it matters.",
      icon: "unlock" as const,
    },
    {
      title: "Create reliable, supervised processes",
      description:
        "AI without guardrails is a liability. We build systems with human oversight, clear escalation paths, and audit trails — so you can trust the output every time.",
      icon: "shield" as const,
    },
    {
      title: "Build tools your team will actually use",
      description:
        "The best system is the one people adopt. We design interfaces that feel obvious, require minimal training, and integrate seamlessly with how your team already works.",
      icon: "users" as const,
    },
  ],
} as const;

export const industryFocus = {
  title: "Where our work creates the most impact",
  subtitle:
    "Deep experience across industries where operations drive competitive advantage.",
  items: [
    {
      title: "Manufacturing, Engineering & Automotive",
      description:
        "AI systems that make production predictable, quality consistent, and supply chains responsive.",
    },
    {
      title: "Real Estate & Property Management",
      description:
        "Compliance tracking, document management, and tenant communication — automated with precision.",
    },
    {
      title: "Legal & Professional Services",
      description:
        "Document analysis, case management workflows, and knowledge retrieval that saves hours per week.",
    },
    {
      title: "Finance & Investment",
      description:
        "Portfolio monitoring, due diligence automation, and reporting systems built for speed and accuracy.",
    },
  ],
} as const;

export const testimonials = {
  label: "Hear from people who know us",
  title: "Trusted by the people who run real operations",
  items: [
    {
      quote:
        "What Pierre-Olivier brings to Hart Dairy goes beyond strategy. He re-architected the way information flows through our organization — from sales to operations to leadership. The AI systems his team built don't just automate; they give us visibility we never had before.",
      name: "Tim Connell",
      role: "CEO, Hart Dairy Creamery",
    },
    {
      quote:
        "Working with CenturySync Studio transformed how we handle compliance and client reporting. The systems are elegant, reliable, and our team adopted them faster than anything we've tried before.",
      name: "Steph Menoret",
      role: "Operations Director",
    },
    {
      quote:
        "Pierre-Olivier doesn't just build technology — he understands business. That's the difference. Every recommendation is grounded in operational reality, not tech hype.",
      name: "Jeremie Moritz",
      role: "Managing Partner",
    },
  ],
} as const;

export const trustedBySoftr = {
  title: "Trusted by Softr",
  description:
    "CenturySync Studio is a Softr Certified Partner — recognized for advanced quality, precision, and discipline in building business applications.",
  cta: "Get Started",
} as const;
