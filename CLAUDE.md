# CenturySync Studio Website

## Stack
- Next.js 15+ (App Router, TypeScript)
- Tailwind CSS v4 (CSS-first @theme config in globals.css)
- Framer Motion (scroll reveals, page load, modal transitions)
- Vercel (auto-deploy from GitHub)

## Architecture
Single-page marketing site. All sections are components in `src/components/sections/`.
All page copy lives in `src/lib/content.ts` — edit there, not in JSX.
Design tokens are in `src/app/globals.css` via Tailwind v4 `@theme inline`.

## Key Files
- `src/app/page.tsx` — Main page, assembles all sections
- `src/app/globals.css` — Design tokens, glassmorphism, btn-shine, card-hover
- `src/lib/content.ts` — All text content
- `src/lib/constants.ts` — URLs, contact info, webhook URL
- `src/components/motion/` — Reusable Framer Motion wrappers

## Design
- Warm cream background (#faf9f5), terracotta accent (#d97757)
- Inter font, Stripe-inspired easing
- No dark mode (single warm palette)

## Form
Contact modal POSTs to n8n webhook at `https://nextgen.pocarles.com/webhook/centurysync-form`

## Domain
studio.centurysync.com (Vercel + custom domain)
