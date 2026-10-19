---
name: year-of-love-design
description: Design system skill for year-of-love. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# year-of-love Design System

You are building UI for **year-of-love**. Light-themed, neutral palette, sans-serif typography (Helvetica), compact density on a 4px grid, expressive motion.

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Helvetica for body/UI text, Arial for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#ffe3f4` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#000000` | Headings, body text |
| Text Muted | `--text-muted` | `#8f8f8f` | Captions, placeholders |
| Border | `--border` | `#5f6360` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Warning | `#ffc648` | Caution states, pending items |
| Danger | `#ff1c1c` | Errors, destructive actions |

### Extended Palette

- `#ffc7e9` — Light surface or highlight color
- `#116dff`
- **disabled-background:** `#c7c7c7`
- `#e2e2e2` — Light surface or highlight color
- `#d9d9d9`

### CSS Variable Tokens

```css
--wst-button-color-fill-primary: rgb(var(--color_48));
--wst-button-color-border-primary: rgb(var(--color_49));
--wst-button-color-text-primary: rgb(var(--color_50));
--wst-button-color-fill-primary-hover: rgb(var(--color_51));
--wst-button-color-border-primary-hover: rgb(var(--color_52));
--wst-button-color-text-primary-hover: rgb(var(--color_53));
--wst-button-color-fill-primary-disabled: rgb(var(--color_54));
--wst-button-color-border-primary-disabled: rgb(var(--color_55));
--wst-button-color-text-primary-disabled: rgb(var(--color_56));
--wst-button-color-fill-secondary: rgb(var(--color_57));
--wst-button-color-border-secondary: rgb(var(--color_58));
--wst-button-color-text-secondary: rgb(var(--color_59));
--wst-button-color-fill-secondary-hover: rgb(var(--color_60));
--wst-button-color-border-secondary-hover: rgb(var(--color_61));
--wst-button-color-text-secondary-hover: rgb(var(--color_62));
--wst-button-color-fill-secondary-disabled: rgb(var(--color_63));
--wst-button-color-border-secondary-disabled: rgb(var(--color_64));
--wst-button-color-text-secondary-disabled: rgb(var(--color_65));
--wst-color-fill-accent-1: rgb(var(--color_41));
--wst-color-fill-accent-2: rgb(var(--color_42));
```

## Typography

### Font Stack

- **Helvetica** — Heading 1, Heading 2, Heading 3
- **Arial** — Body, Caption

### Font Sources

```css
@font-face {
  font-family: "wf_0e90aa67e703460abd6192534";
  src: url("fonts/wf_0e90aa67e703460abd6192534-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "wf_83529634f1c24184921dcf16f";
  src: url("fonts/wf_83529634f1c24184921dcf16f-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "din-next-w01-light";
  src: url("fonts/din-next-w01-light-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "madefor-text";
  src: url("fonts/madefor-text-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "madefor-text-mediumbold";
  src: url("fonts/madefor-text-mediumbold-530.woff2") format("woff2");
  font-weight: 530;
}
@font-face {
  font-family: "wf_72aa7ab59c5740d2a7aeeee0f";
  src: url("fonts/wf_72aa7ab59c5740d2a7aeeee0f-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins";
  src: url("fonts/poppins-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "poppins";
  src: url("fonts/poppins-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins-extralight";
  src: url("fonts/poppins-extralight-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins-extralight";
  src: url("fonts/poppins-extralight-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "helveticaneuew01-45ligh";
  src: url("https://static.parastorage.com/fonts/v2/e333842f-0a84-43f9-9ab7-fb1093ba1628/v1/helveticaneuew01-45ligh.other.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "helveticaneuew02-45ligh";
  src: url("https://static.parastorage.com/fonts/v2/bcaffff6-40a1-4827-ace9-c65e93f5fb5f/v1/helveticaneuew02-45ligh.other.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "helveticaneuew10-45ligh";
  src: url("https://static.parastorage.com/fonts/v2/68b86ae9-7ca0-48cc-b777-6559005a8f94/v1/helveticaneuew10-45ligh.other.woff2") format("woff2");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Helvetica | 121px | 700 |
| Heading 2 | Helvetica | 75px | 700 |
| Heading 3 | Helvetica | 73px | 700 |
| Body | Arial | 16px | 400 |
| Caption | Arial | 14px | 400 |

### Typography Rules

- Body/UI: **Helvetica**, Headings: **Arial** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 16, 20, 24, 26, 28, 30` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `1px, 1.5px, 2px, 2em, 4px, 5px, 10px, 24px, 100%, 100px, 999px`
Default: `5px`

### Container

Max-width: `1000px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| xs | 320px |
| md | 750px |
| lg | 1000px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #ffe3f4;
  border: 1px solid #5f6360;
  border-radius: 5px;
  padding: 16px;
  box-shadow: var(--shd,0 1px 4px #0009);
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #cccccc;
  color: #000000;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #5f6360;
  color: #000000;
  border-radius: 5px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #5f6360;
  border-radius: 5px;
  padding: 8px 12px;
  color: #000000;
  font-size: 14px;
}
.input:focus { border-color: var(--accent); outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #ffe3f4;
  color: #8f8f8f;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #ffe3f4;
  border: 1px solid #5f6360;
  border-radius: 999px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 1.5px 3.71px 9px rgba(19,25,70,0);
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #8f8f8f;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #5f6360;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #5f6360;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #5f6360;
}
.nav-link {
  color: #8f8f8f;
  padding: 8px 12px;
  border-radius: 5px;
  transition: color 150ms;
}
.nav-link:hover { color: #000000; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Navigation** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (1 items)
- **Hero** — Hero section (detected from heading structure)
- **Faq** — FAQ/accordion section
- **Footer** — Page footer with links and info (1 items)

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `slide-horizontal-new`
- `slide-horizontal-old`
- `slide-vertical-new`
- `slide-vertical-old`
- `out-in-new`

### Motion Tokens

- **Duration scale:** `0ms`, `.3s`, `.6s`, `10ms`, `50ms`, `100ms`, `120ms`, `150ms`, `200ms`, `250ms`, `300ms`, `330ms`, `400ms`, `450ms`, `500ms`, `800ms`
- **Easing functions:** `cubic-bezier(.37,0,.63,1)`, `cubic-bezier(.64,0,.78,0)`, `cubic-bezier(.22,1,.36,1)`, `cubic-bezier(.87,0,.13,1)`, `ease-in`, `ease`, `ease-in-out`, `cubic-bezier(.645,.045,.355,1)`, `linear`, `ease-out`, `cubic-bezier(.54,-.81,.57,.57)`, `cubic-bezier(.9,-.6,.3,1.6)`, `cubic-bezier(0,1,.5,1)`, `cubic-bezier(.25,.46,.45,.94)`, `cubic-bezier(.3,1.4,.7,1)`, `cubic-bezier(0.39,0.575,0.565,1)`, `cubic-bezier(0.445,0.05,0.55,0.95)`, `cubic-bezier(0.47,0,0.745,0.715)`, `cubic-bezier(0.175,0.885,0.32,1.275)`
- **Animated properties:** `opacity`, `visibility`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0ms) for micro-interactions, long (800ms) for page transitions
- **Easing:** Use `cubic-bezier(.37,0,.63,1)` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Raised (cards, buttons): `var(--shd,0 1px 4px #0009)`
- Raised (cards, buttons): `var(--box-shadow)`
- Raised (cards, buttons): `var(--hover-box-shadow,var(--box-shadow))`
- Raised (cards, buttons): `var(--disabled-box-shadow,var(--box-shadow))`
- Raised (cards, buttons): `var(--boxShadow,none)`
- Raised (cards, buttons): `var(--shd,0 0 0#0000)`

### Z-Index Scale

`0, 1, 5, 50, 53, 54, 56, 57, 1005, 9999, 99999, 100000, 100001`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Helvetica and Arial are allowed
- **No arbitrary border-radius** — use the scale: 1px, 1.5px, 2px, 2em, 4px, 5px, 10px, 24px, 100px, 999px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Helvetica, Arial only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `https://static.wixstatic.com/shapes/0781b1_9287d3614d12417b8b7fa055812575e6.svg`
- **Site URL:** `https://year-of-love.exploresyndrome.com/`
- **Brand typeface:** Helvetica

## Quick Reference

```
Background:     #ffffff
Surface:        #ffe3f4
Text:           #000000 / #8f8f8f
Accent:         (not extracted)
Border:         #5f6360
Font:           Helvetica
Spacing:        4px grid
Radius:         5px
Components:     8 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for year-of-love
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "year-of-love" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# year-of-love DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 12 · Fonts: 2 · Components: 8
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography pairs **Arial** for display/headings with **Helvetica** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 16, 20px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| icon-color | `#ffffff` | background | Page background, darkest surface |
| hover-background | `#ffe3f4` | surface | Card and panel backgrounds |
| disabled-color | `#000000` | text-primary | Headings and body text |
| text-muted | `#8f8f8f` | text-muted | Captions, placeholders, secondary info |
| border | `#5f6360` | border | Dividers, card borders, outlines |
| danger | `#ff1c1c` | danger | Error states, destructive actions |
| warning | `#ffc648` | warning | Warning states, caution indicators |
| info | `#116dff` | info | Informational highlights |
| unknown | `#ffc7e9` | unknown | Palette color |
| disabled-background | `#c7c7c7` | unknown | Palette color |
| unknown | `#e2e2e2` | unknown | Palette color |
| unknown | `#d9d9d9` | unknown | Palette color |

### CSS Variable Tokens

```css
--wst-button-color-fill-primary: rgb(var(--color_48));
--wst-button-color-border-primary: rgb(var(--color_49));
--wst-button-color-text-primary: rgb(var(--color_50));
--wst-button-color-fill-primary-hover: rgb(var(--color_51));
--wst-button-color-border-primary-hover: rgb(var(--color_52));
--wst-button-color-text-primary-hover: rgb(var(--color_53));
--wst-button-color-fill-primary-disabled: rgb(var(--color_54));
--wst-button-color-border-primary-disabled: rgb(var(--color_55));
--wst-button-color-text-primary-disabled: rgb(var(--color_56));
--wst-button-color-fill-secondary: rgb(var(--color_57));
--wst-button-color-border-secondary: rgb(var(--color_58));
--wst-button-color-text-secondary: rgb(var(--color_59));
--wst-button-color-fill-secondary-hover: rgb(var(--color_60));
--wst-button-color-border-secondary-hover: rgb(var(--color_61));
--wst-button-color-text-secondary-hover: rgb(var(--color_62));
--wst-button-color-fill-secondary-disabled: rgb(var(--color_63));
--wst-button-color-border-secondary-disabled: rgb(var(--color_64));
--wst-button-color-text-secondary-disabled: rgb(var(--color_65));
--wst-color-fill-accent-1: rgb(var(--color_41));
--wst-color-fill-accent-2: rgb(var(--color_42));
```


---

## 3. Typography Rules

**Font Stack:**
- **Helvetica** — Heading 1, Heading 2, Heading 3
- **Arial** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "wf_0e90aa67e703460abd6192534";
  src: url("fonts/wf_0e90aa67e703460abd6192534-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "wf_83529634f1c24184921dcf16f";
  src: url("fonts/wf_83529634f1c24184921dcf16f-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "din-next-w01-light";
  src: url("fonts/din-next-w01-light-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "madefor-text";
  src: url("fonts/madefor-text-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "madefor-text-mediumbold";
  src: url("fonts/madefor-text-mediumbold-530.woff2") format("woff2");
  font-weight: 530;
}
@font-face {
  font-family: "wf_72aa7ab59c5740d2a7aeeee0f";
  src: url("fonts/wf_72aa7ab59c5740d2a7aeeee0f-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins";
  src: url("fonts/poppins-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "poppins";
  src: url("fonts/poppins-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins-extralight";
  src: url("fonts/poppins-extralight-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins-extralight";
  src: url("fonts/poppins-extralight-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "helveticaneuew01-45ligh";
  src: url("https://static.parastorage.com/fonts/v2/e333842f-0a84-43f9-9ab7-fb1093ba1628/v1/helveticaneuew01-45ligh.other.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "helveticaneuew02-45ligh";
  src: url("https://static.parastorage.com/fonts/v2/bcaffff6-40a1-4827-ace9-c65e93f5fb5f/v1/helveticaneuew02-45ligh.other.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "helveticaneuew10-45ligh";
  src: url("https://static.parastorage.com/fonts/v2/68b86ae9-7ca0-48cc-b777-6559005a8f94/v1/helveticaneuew10-45ligh.other.woff2") format("woff2");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Helvetica | 121px | 700 |
| Heading 2 | Helvetica | 75px | 700 |
| Heading 3 | Helvetica | 73px | 700 |
| Body | Arial | 16px | 400 |
| Caption | Arial | 14px | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Helvetica** for body/UI text, **Arial** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Badge** — `html`

**List** — `html`

### Data Input (1)

**Button** — `html`
- Animation: 

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 16, 20, 24, 26, 28, 30
- **Border radius:** 1px, 1.5px, 2px, 2em, 4px, 5px, 10px, 24px, 100%, 100px, 999px
- **Max content width:** 1000px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `var(--shd,0 1px 4px #0009)`
- `var(--box-shadow)`
- `var(--hover-box-shadow,var(--box-shadow))`

### Floating — dropdowns, popovers, modals

- `1.5px 3.71px 9px rgba(19,25,70,0)`
- `1.5px 3px 9px rgba(19,25,70,0)`

### Z-Index Scale

`0, 1, 5, 50, 53, 54, 56, 57, 1005, 9999, 99999, 100000, 100001`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes slide-horizontal-new`
- `@keyframes slide-horizontal-old`
- `@keyframes slide-vertical-new`
- `@keyframes slide-vertical-old`
- `@keyframes out-in-new`
- `@keyframes out-in-old`
- `@keyframes SlideshowRepeater_none`
- `@keyframes SlideshowRepeater_slidePrevOut`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ffffff` as the primary page background
- Pair **Helvetica** (body) with **Arial** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 1px, 1.5px, 2px, 2em, 4px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Helvetica and Arial
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 320px | css |
| md | 750px | css |
| lg | 1000px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffe3f4
Border: 1px solid #5f6360
Radius: 5px
Padding: 16px
Font: Helvetica
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #5f6360
Padding: 8px 16px
Radius: 5px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1000px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffe3f4
Label: #8f8f8f (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #5f6360
Focus: border-color var(--accent)
Label: #8f8f8f 12px
Spacing: 16px between fields
Radius: 5px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Helvetica, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/din-next-w01-light-Regular.woff2`
- `fonts/madefor-text-mediumbold-530.woff2`
- `fonts/madefor-text-Regular.woff2`
- `fonts/poppins-700.woff2`
- `fonts/poppins-extralight-700.woff2`
- `fonts/poppins-extralight-Regular.woff2`
- `fonts/poppins-Regular.woff2`
- `fonts/wf_0e90aa67e703460abd6192534-Regular.ttf`
- `fonts/wf_0e90aa67e703460abd6192534-Regular.woff`
- `fonts/wf_0e90aa67e703460abd6192534-Regular.woff2`
- `fonts/wf_72aa7ab59c5740d2a7aeeee0f-Regular.ttf`
- `fonts/wf_72aa7ab59c5740d2a7aeeee0f-Regular.woff`
- `fonts/wf_72aa7ab59c5740d2a7aeeee0f-Regular.woff2`
- `fonts/wf_83529634f1c24184921dcf16f-Regular.ttf`
- `fonts/wf_83529634f1c24184921dcf16f-Regular.woff`
- `fonts/wf_83529634f1c24184921dcf16f-Regular.woff2`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

