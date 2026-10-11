# Portfolio Development Rules & Spacing System Standards

## Permanent Design Rule: Unified Spacing System
Whenever adding, removing, or modifying anything in this portfolio in future changes, always strictly follow the established spacing system tokens and visual rhythm instead of introducing inconsistent margins, padding, or gaps.

### Established Spacing Tokens (`src/index.css`)
- `--section-gap-global`: `clamp(2.75rem, 5.5vw, 4rem)` — Global vertical separation between sections applied on `.main-content`. Sections should have `padding: 0` to preserve uniform rhythm without double-padding gaps.
- `--section-padding-x`: `clamp(1rem, 3.5vw, 2rem)` — Responsive horizontal container gutter.
- `--section-header-gap`: `0.45rem` — Consistent gap between section title and subtitle.
- `--section-header-margin-bottom`: `clamp(1.75rem, 3.5vw, 2.5rem)` — Standard margin below section headers before content.
- `--stack-cards-gap`: `clamp(1.75rem, 3.5vw, 2.5rem)` — Uniform gap between stacked cards (Projects, Achievements).
- `--card-element-gap`: `clamp(0.85rem, 1.8vw, 1.25rem)` — Gap between elements within cards.
- `--button-group-gap`: `0.75rem` — Standard gap between adjacent buttons.
- `--nav-scroll-offset`: `calc(var(--nav-height) + 1.25rem)` — Required scroll offset so sticky navbar never overlaps section titles upon anchor navigation.

### Layout Constraints
1. **No Arbitrary Heights:** Never use `min-height: 100vh` on sections with compact content (e.g. About, Skills, Projects). Let content flow naturally.
2. **No Double Padding:** Do not combine large section top/bottom padding with `.main-content` global gap.
3. **Responsive Fluidity:** Always use CSS `clamp(...)` for typography, padding, and gaps to ensure optimal balance across desktop, tablet, and mobile.
4. **Theme Preservation:** Retain the cosmic dark palette (`#050816`), neon purple/cyan accents, and glassmorphism styling.
