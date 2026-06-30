# Aquahealth UI Component Specifications

This library details the core reusable UI components for Aquahealth applications. Each component is defined with states, visual guidelines, HTML/CSS markup, and WCAG accessibility standards.

---

## 1. Buttons

Buttons are used for actions, form submissions, and redirects. All buttons must have smooth transitions (`transition-all duration-200`).

### 1.1 Button Types & Markup

#### Primary Action Button
Used for critical positive actions (e.g., "Book Now").
- **Styling**: Background: `#0B4F8C` (Deep Ocean Blue); Text: `#FFFFFF` (White); Radius: `12px`.
- **States**:
  - `Default`: `bg-primary text-white shadow-sm`
  - `Hover`: `bg-[#083c6b] scale-[1.01]`
  - `Active`: `scale-[0.99] opacity-95`
  - `Focus`: `ring-2 ring-primary/30 ring-offset-2 outline-none`
  - `Disabled`: `opacity-50 cursor-not-allowed`

```html
<button class="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-sm transition-all active:scale-98 focus:ring-2 focus:ring-primary/20 outline-none disabled:opacity-50">
  Book Now
</button>
```

#### Secondary WhatsApp Button
Used for direct instant booking on mobile/web.
- **Styling**: Background: `#25D366` (WhatsApp Green); Text: `#FFFFFF`.
- **States**:
  - `Default`: `bg-[#25D366] text-white shadow-sm`
  - `Hover`: `bg-[#20ba56] hover:shadow-lg`
  - `Active`: `scale-[0.98]`

```html
<a href="https://wa.me/919840275122" class="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold rounded-xl shadow-sm transition-all active:scale-98">
  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">...</svg>
  Book on WhatsApp
</a>
```

### 1.2 Accessibility Rules (Buttons)
- Buttons must include readable text. Icon-only buttons must have `aria-label` tags describing the action.
- Target click area: Minimum `48px` x `48px` to comply with mobile accessibility rules.

---

## 2. Text Input & Select Elements

Inputs capture client booking details. High contrast states and clear validation hints prevent user errors.

### 2.1 CSS Classes & States
- `Default`: Border: `1px Solid #E5E7EB`; Background: `#FFFFFF`; Text: `#111827`.
- `Focus`: Border: `1px Solid #0B4F8C`; Ring: `2px Solid rgba(11, 79, 140, 0.15)`.
- `Error`: Border: `1px Solid #EF4444` (Red); Ring: `2px Solid rgba(239, 68, 68, 0.1)`.
- `Disabled`: Background: `#F7FAFC`; Border: `#E5E7EB`; Text: `#9CA3AF`; Cursor: `not-allowed`.

```html
<!-- Text Input Group -->
<div class="space-y-1">
  <label for="client-name" class="block text-xs font-bold text-zinc-500 uppercase tracking-wider">
    Full Name *
  </label>
  <input
    type="text"
    id="client-name"
    required
    placeholder="E.g., Rajesh Kumar"
    class="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
  />
</div>
```

### 2.2 Accessibility Rules (Inputs)
- Every `<input>` or `<select>` element must be accompanied by an explicit `<label>` referencing the input's `id` using the `for` attribute.
- Validation errors must include `aria-invalid="true"` and associate error text using `aria-describedby`.

---

## 3. Glassmorphism Service Cards

Cards display individual brand values, plans, and technician summaries.

- **Background**: `rgba(255, 255, 255, 0.7)`
- **Border**: `1px solid rgba(229, 231, 235, 0.6)`
- **Backdrop Blur**: `8px`
- **Shadow**: `0 4px 30px rgba(0, 0, 0, 0.02)`
- **Hover Treatment**: Smooth card elevation scaling and border transition:
  - `hover:border-primary/15 hover:shadow-xl hover:translate-y-[-2px]`

```html
<div class="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-zinc-200/60 shadow-sm hover:border-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
  <h3 class="text-lg font-bold text-dark-text">Professional Inspection</h3>
  <p class="mt-2 text-sm text-grey-text">Thorough diagnostic check with zero hidden charges.</p>
</div>
```

---

## 4. Interactive Before/After reveal

Showcases dirty filter panels vs sparkling sanitized elements.

- **Structure**:
  - A relative container housing two layers of absolute positioned images.
  - The bottom image displays the dirty filter.
  - The top image container holds the clean filter, with its width bound dynamically to the horizontal slider element (`width: [sliderPos]%` with `overflow-hidden`).
  - An absolute divider line and circular grab handle overlays the boundary.

```html
<div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none">
  <!-- Bottom layer: Before -->
  <img src="/before.png" class="absolute inset-0 w-full h-full object-cover" alt="Dirty filter before servicing" />
  
  <!-- Top layer: After (width bounds controlled by JS slider value) -->
  <div class="absolute inset-0 overflow-hidden" style="width: 50%;">
    <img src="/after.png" class="absolute inset-0 w-full h-full object-cover max-w-none" alt="Clean filter after servicing" />
  </div>
  
  <!-- Slider Divider line -->
  <div class="absolute inset-y-0 w-0.5 bg-white cursor-ew-resize" style="left: 50%;">
    <!-- Slider Handle -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
      <span class="text-zinc-500 font-bold">&#8596;</span>
    </div>
  </div>
</div>
```
