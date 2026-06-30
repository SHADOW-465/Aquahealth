# Aquahealth Brand Identity & Visual Guidelines

This document establishes the official brand identity, brand strategy, design system foundations, and visual guidelines for **Aquahealth** (Chennai, India). All future landing pages, interfaces, offline collateral, uniforms, vehicles, and customer materials must adhere to these directives.

---

## 1. Brand Strategy & Positioning

### 1.1 Brand Vision & Mission
- **Vision**: To elevate water purification service from a transactional, fragmented commodity to a premium, technology-driven health standard.
- **Mission**: Providing absolute purity and total transparency to families and offices through medical-grade water engineering and a customer-first service ethos.
- **Core Tagline**: `Pure Water. Honest Service.`

### 1.2 Brand Values
1. **Purity (Science & Health)**: We focus on measurable water quality metrics (TDS, pH, organic filtration), never marketing tricks.
2. **Transparency (Honesty)**: Clear explanation of issues, fixed upfront prices, and zero unnecessary parts replacements.
3. **Engineering Rigor (Technology)**: Precision diagnostics, premium certified components, and structured service steps.
4. **Reliability (Professionalism)**: Prompt arrival, clean technicians, and structured service guarantees.

### 1.3 Brand Voice & Tone
- **Professional & Expert**: Confident, scientific, clear. We explain the "why" of water chemistry.
- **Honest & Direct**: Transparent pricing and components. Avoid "sales pitch" copy or over-promising.
- **Minimalist & Clean**: Every communication is structured, uncluttered, and precise.
- **Warm & Family-Focused**: Reassuring, friendly, and protective of family health.

---

## 2. Logo System

Aquahealth's logo represents precision, flow, and filtration. It is a fusion of a **pristine water droplet** and a **technological precision node** (representing filtration and engineering).

### 2.1 Logo Architecture
- **Logomark**: A geometric droplet outline in Bright Aqua enclosing a clean medical/filtration cross in Deep Ocean Blue.
- **Logotype**: The word "Aqua" set in Medium weight, and "health" set in Bold weight. Font: **Geist Sans**.
- **Signature Lockup**: Vertical or horizontal lockup containing both Logomark and Logotype.

```
       [ Droplet + Cross Mark ]
       
            Aquahealth
   PURE WATER. HONEST SERVICE.
```

### 2.2 Clearance & Clear Space
- Clear space around the logo must always be equal to or greater than the height of the capital letter "A" in "Aqua".
- No other graphics, text, or page borders may encroach upon this clear space.

### 2.3 Logo Colors & Variations
1. **Primary Lockup**: Deep Ocean Blue (`#0B4F8C`) for "Aqua" and text; Bright Aqua (`#00A9CE`) for "health" and droplet elements. Recommended for white or light grey backgrounds.
2. **White Monochrome**: All-white logo. Authorized only for dark colored backgrounds (Deep Ocean Blue or dark images).
3. **Dark Monochrome**: All-black or dark grey (`#111827`). Reserved for clean monochrome print media (such as invoices or delivery receipts).

### 2.4 Incorrect Usage
- 🚫 Do not warp, stretch, or rotate the logo.
- 🚫 Do not apply drop shadows, cheap gradients, or glows to the logo.
- 🚫 Do not place the primary colored logo on low-contrast backgrounds (e.g. bright blue, yellow, or patterned photos).

---

## 3. Color System

Aquahealth's color palette is calibrated for high visual contrast (WCAG AA/AAA compliant), cleanliness, and medical trust.

### 3.1 Primary Brand Colors
- **Deep Ocean Blue (`#0B4F8C`)**: Establishes enterprise stability, medical trust, and water purity.
- **Bright Aqua (`#00A9CE`)**: Adds energy, freshness, and technology-inspired clarity.
- **Emerald Green (`#2FBF71`)**: Accent color indicating health, safety, successfully filtered status, and environmental responsibility.

### 3.2 Neutrals & Layout Colors
- **Pure White (`#FFFFFF`)**: Primary background for pages, forms, and brochures to maximize whitespace.
- **Light Slate Grey (`#F7FAFC`)**: Secondary section background for clean visual grouping.
- **Charcoal Dark (`#111827`)**: Main typography color, ensuring high legibility.
- **Cool Muted Grey (`#6B7280`)**: Secondary caption text and borders (`#E5E7EB`).

### 3.3 Color Contrast Matrix
- All body text (`#111827`) on White (`#FFFFFF`) or Slate (`#F7FAFC`) exceeds **7:1** contrast ratio (Passes WCAG AAA).
- Primary buttons in Deep Ocean Blue (`#0B4F8C`) with White (`#FFFFFF`) text exceed **4.5:1** contrast ratio (Passes WCAG AA).

---

## 4. Typography Scale

Aquahealth uses **Geist Sans** (or Inter as a fallback) for modern technology-driven typography.

| Token | CSS Name | Size (px/rem) | Weight | Line Height | Letter Spacing | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-1` | `text-display-lg` | `60px / 3.75rem` | `900` (Black) | `1.1` | `-0.02em` | Hero Headings |
| `h1` | `text-h1` | `40px / 2.5rem` | `800` (Extra Bold)| `1.2` | `-0.01em` | Major Sections |
| `h2` | `text-h2` | `28px / 1.75rem` | `700` (Bold) | `1.3` | `-0.01em` | Cards / Subsections |
| `body-lg` | `text-body-lg` | `18px / 1.125rem` | `500` (Medium) | `1.6` | `0` | Hero intro text |
| `body-base`| `text-body` | `16px / 1rem` | `400` (Regular) | `1.5` | `0` | General paragraphs |
| `label-bold`| `text-label-md` | `14px / 0.875rem`| `700` (Bold) | `1.4` | `0.05em` (Caps)| Badges / Action Text |
| `caption` | `text-caption` | `12px / 0.75rem` | `500` (Medium) | `1.4` | `0` | Small notes / Footers |

---

## 5. Grid System & Layout Rules

To preserve a clean, balanced look with plenty of whitespace, we use a structured grid layout.

### 5.1 Breakpoints
- **Mobile**: `< 640px` (4 Columns, 16px Gutter, 16px Padding)
- **Tablet**: `640px - 1024px` (8 Columns, 24px Gutter, 24px Padding)
- **Desktop**: `> 1024px` (12 Columns, 32px Gutter, 32px Margin max-width `1280px`)

### 5.2 Layout Principles
- **Whitespace Ratio**: Minimum 40% of page area should be pure whitespace (void of text and illustrations) to promote clean Apple/Stripe-like layouts.
- **Border Radii**: All interactive cards, inputs, and buttons use a `12px` (Medium) or `16px` (Large) corner radius. Sharp, pointed corners are forbidden.
- **Elevation / Shadows**: Use soft, light grey shadows for depth:
  - `shadow-sm`: `0 2px 8px rgba(0, 0, 0, 0.04)` (Cards, navigation hover)
  - `shadow-lg`: `0 8px 30px rgba(0, 0, 0, 0.06)` (Modals, exit intent popups)

---

## 6. Photography & Graphic Style

### 6.1 Photography Style Guide
- **Lighting**: Bright, neutral, natural daylight. Avoid synthetic blue studio filters or artificial warm glows.
- **Composition**: Clean backgrounds, minimal props, depth-of-field focus on the appliance or service action.
- **Realism**: Photos must showcase genuine Indian home settings, modular kitchens, and realistic technicians. No hyper-stylized stock models or cartoonish graphics.

### 6.2 Iconography Style
- All icons must follow a **dual-tone** or **monoline stroke style** using **Lucide Icons**.
- **Stroke Width**: Fixed at `2px` for consistent weight across scales.
- **Visual Treatment**: Never use cartoon icons. Keep icons wrapped in clean, soft-cornered square containers with transparent primary background fills (`bg-primary/10`).
