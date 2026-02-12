# CenturySync Studio — Design System v1.0

> "Warm intention" — warm palette, intentional spacing, smooth motion, nothing shouts.

## Philosophy

CenturySync Studio is a small, focused AI consultancy. The design reflects that: warm, intentional, confident without being loud. Every element earns its place. Spacing is generous. Motion is smooth. Typography creates hierarchy through weight contrast, not size alone.

**Benchmarks:** Apple product pages, Arc'teryx, Stripe — clean, editorial, premium. NOT generic tech startups or loud SaaS landing pages.

---

## Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#faf9f5` | Page background |
| `cream-dark` | `#f0ede7` | Subtle backgrounds, hover states |
| `terracotta` | `#d97757` | Accent, CTAs, labels |
| `terracotta-light` | `#e8957a` | Hover state |
| `terracotta-dark` | `#c4623f` | Active state |
| `navy` | `#152237` | Headings, primary text |
| `navy-light` | `#1d3050` | Hover variant |
| `charcoal` | `#1a1a1a` | Footer background, button fills |

### Semantic Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#152237` | Headings, strong text |
| `text-secondary` | `#4a5568` | Body copy |
| `text-muted` | `#718096` | Captions, metadata |
| `border` | `#e2e0db` | Input borders, dividers |
| `border-light` | `#f0ede7` | Card borders, subtle separators |

### Usage Rules

- Terracotta is always sparingly applied — labels, links, accents. Never large fills.
- Navy for all headings, never gray.
- Body text is `text-secondary`, not `text-primary`.
- White (`bg-white`) for card surfaces and alternating sections.

---

## Typography

**Font:** Inter (Google Fonts), `--font-sans`
**Feature settings:** `"cv02", "cv03", "cv04", "cv11"`

### Weight Hierarchy

| Level | Weight | Class | Usage |
|-------|--------|-------|-------|
| Display | 800 | `font-extrabold` | Hero headline only |
| Heading | 700 | `font-bold` | Section titles, card titles |
| Subheading | 600 | `font-semibold` | Labels, buttons, nav |
| Body | 400 | (default) | Body copy |
| Elegant | 300 | `font-light` | Subtitles, hero subheadline, descriptive text |

### Size Scale

| Element | Mobile | Tablet | Desktop | Tracking |
|---------|--------|--------|---------|----------|
| Hero headline | `text-4xl` | `text-5xl` | `text-6xl lg:text-7xl` | `tracking-tighter` |
| Section title | `text-3xl` | `text-4xl` | `text-5xl` | `tracking-tight` |
| Card title | `text-lg` | `text-lg` | `text-lg` | default |
| Body | `text-base` / `text-sm` | — | — | default |
| Label | `text-xs` | — | — | `tracking-[0.15em]` uppercase |

### Key Contrast

The "bold claim + elegant description" pattern:
- Title: `font-bold` or `font-extrabold` (700/800)
- Subtitle/description: `font-light` (300)

This weight contrast creates sophistication without increasing size.

---

## Spacing

**Grid:** 8px base unit
**Bias:** Generous — always err toward more breathing room.

### Section Spacing

| Context | Value |
|---------|-------|
| Section vertical padding | `py-24 md:py-32 lg:py-40` |
| Section heading → content | `mb-14 md:mb-20` |
| Max content width | `max-w-6xl` (1152px) |
| Container horizontal padding | `px-6 lg:px-8` |

### Component Spacing

| Context | Value |
|---------|-------|
| Card padding | `p-8 md:p-10` |
| Card grid gap | `gap-8` |
| Paragraph spacing | `space-y-4` |
| Button padding | `px-8 py-4` (large) / `px-6 py-3` (medium) |

---

## Elevation (Shadow Scale)

4-level shadow system. Cards start at level 1, rise to level 2 on hover.

| Level | Token | CSS | Usage |
|-------|-------|-----|-------|
| 0 | — | none | Flat elements |
| 1 | `--shadow-1` | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Cards at rest |
| 2 | `--shadow-2` | `0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)` | Cards on hover |
| 3 | `--shadow-3` | `0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)` | Modals, floating elements |
| 4 | `--shadow-4` | `0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)` | Reserved |

---

## Motion

**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — smooth hydraulic feel (NOT standard `ease` or Stripe bounce)

### Timing

| Animation | Duration | Notes |
|-----------|----------|-------|
| Scroll reveal (FadeInView) | 800ms | Y offset: 30px |
| Stagger delay | 100ms | Between stagger children |
| Stagger child | 700ms | Individual child animation |
| Page load (AnimateOnLoad) | 800ms | Hero entrance |
| Card hover | 500ms | Shadow + lift transition |
| Image zoom on hover | 1500ms | Slow, luxurious |
| Button/link hover | 200ms | Quick feedback |
| Testimonial crossfade | 400ms | Auto-rotate every 5s |

### Scroll Reveal

- Viewport threshold: 0.15
- Root margin: -60px (trigger slightly before entering view)
- Direction: "up" default (30px Y offset)
- Once: true (never re-animate)

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce` — instant display, no movement.

---

## Borders & Radius

| Element | Radius | Border |
|---------|--------|--------|
| Cards | `rounded-2xl` (16px) | `border border-border-light` |
| Photos | `rounded-lg` (8px) | none |
| Buttons (pill) | `rounded-full` (9999px) | none |
| Inputs | `rounded-xl` (12px) | `border border-border` |
| Avatars | `rounded-full` | none |

---

## Components

### Buttons

**Primary (large):**
```
bg-charcoal text-white font-semibold rounded-full
px-8 py-4 text-base
btn-shine transition-all duration-200
hover:-translate-y-px hover:shadow-lg
```

**Primary (medium):**
```
bg-charcoal text-white font-semibold rounded-full
px-6 py-3 text-sm
btn-shine transition-all duration-200
hover:-translate-y-px hover:shadow-lg
```

**Text link (inline CTA):**
```
text-sm font-semibold text-terracotta
hover:text-terracotta-dark transition-colors
inline-flex items-center gap-1
```

### Cards

```
rounded-2xl border border-border-light bg-white overflow-hidden
shadow-sm hover:shadow-md hover:border-terracotta/15
transition-all duration-500
hover:-translate-y-1.5
```

Card image container: `overflow-hidden rounded-t-2xl`
Card image hover: `transition-transform duration-[1500ms] group-hover:scale-105`
Card body: `p-8 md:p-10`

### Section Heading

```
text-center max-w-2xl mx-auto mb-14 md:mb-20
```
- Label: `text-xs font-semibold uppercase tracking-[0.15em] text-terracotta mb-3`
- Title: `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy`
- Subtitle: `mt-4 text-lg text-text-secondary leading-relaxed font-light`

### Glassmorphism (Header)

```
background: rgba(250, 249, 245, 0.8)
backdrop-filter: blur(20px) saturate(180%)
border-bottom: 1px solid rgba(226, 224, 219, 0.5)
```

---

## Photography

- Always `rounded-lg` (8px radius) for photos
- Natural proportions — no forced aspect ratios that crop baked-in text
- Use `width` + `height` + `w-full h-auto` for natural rendering
- Founder photo: `rounded-2xl` with `shadow-lg`
- Hover zoom: `group-hover:scale-105` over `duration-[1500ms]`

---

## Accessibility

- WCAG AA contrast on all text
- 44px minimum touch targets on mobile
- `prefers-reduced-motion` support on all animations
- Focus visible: `box-shadow: 0 0 0 2px var(--color-terracotta)`
- Semantic HTML: proper heading hierarchy, form labels, ARIA attributes
- Smooth scroll via CSS `scroll-behavior: smooth`

---

## Section Order

```
Header (fixed, glassmorphism)
Hero
Who We Are
Tech Partners
Trusted by Softr
Services (with heading: "How we help your business grow")
Industry Focus
Testimonials
Contact Section
Footer
```
