# Visual Verification Evidence

This directory is the Phase 7 visual evidence bundle. It preserves the reference and implementation screenshots used for the 2026-09-19 review.

## Structure

- `figma/` — source screenshots for all 36 implemented Figma component groups.
- `storybook/` — rendered Storybook screenshots at 1440×900 plus targeted 320×700 RTL and interactive captures.

The screenshots are review evidence, not an automated image-diff baseline. Differences were evaluated against component anatomy, dimensions, spacing, typography, colors, borders, radius, elevation, icons, alignment, state coverage, directionality, and narrow-container behavior.

## Reproduce the implementation side

```sh
pnpm storybook
```

Open `http://localhost:6006`, use the isolated story iframe for a stable canvas, and capture the stories listed in `docs/PHASE-7-TESTING-VISUAL-VERIFICATION.md`. The Storybook direction toolbar can switch between LTR and RTL.

Run the automated quality suite separately:

```sh
pnpm test:coverage
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

## Interpretation

An `Aligned` result means the available Figma anatomy and visual state are represented by the code implementation. It does not override an explicit item in `DESIGN-DECISIONS.md`, claim untested browser parity, or imply blanket WCAG conformance.
