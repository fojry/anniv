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
  src: url("https://static.wixstatic.com/ufonts/90111e_0e90aa67e703460abd61925340b184c6/woff2/file.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "wf_83529634f1c24184921dcf16f";
  src: url("https://static.wixstatic.com/ufonts/254bf9_83529634f1c24184921dcf16ff23e705/woff2/file.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "din-next-w01-light";
  src: url("https://static.parastorage.com/fonts/v2/eca8b0cd-45d8-43cf-aee7-ca462bc5497c/v1/din-next-w10-light.woff2") format("woff2");
  font-weight: 400;
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
@font-face {
  font-family: "madefor-text";
  src: url("https://static.parastorage.com/fonts/v2/f73e760d-c6b3-4659-9a8c-9ce1d76c1173/madefor-text.var.original.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "madefor-text-mediumbold";
  src: url("https://static.parastorage.com/fonts/v2/f73e760d-c6b3-4659-9a8c-9ce1d76c1173/madefor-text.var.original.woff2") format("woff2");
  font-weight: 530;
}
@font-face {
  font-family: "wf_72aa7ab59c5740d2a7aeeee0f";
  src: url("https://static.wixstatic.com/ufonts/baac51_72aa7ab59c5740d2a7aeeee0f96d2d35/woff2/file.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins";
  src: url("https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/poppins/v21/pxiDyp8kv8JHgFVrJJLmy15VGdeOYktMqlap.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "poppins";
  src: url("https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/poppins/v21/pxiGyp8kv8JHgFVrJJLufntAOvWDSHFF.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins-extralight";
  src: url("https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/poppins/v5/h3r77AwDsldr1E_2g4qqGPk_vArhqVIZ0nv9q090hN8.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "poppins-extralight";
  src: url("https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/poppins/v5/Fm41upUVp7KTKUZhL0PfQVtXRa8TVwTICgirnJhmVJw.woff2") format("woff2");
  font-weight: 700;
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
