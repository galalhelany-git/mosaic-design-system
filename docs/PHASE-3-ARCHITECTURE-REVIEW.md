# Phase 3 Architecture Review

Phase 3 implements three representative components to validate the Figma → tokens → React → Storybook path before scaling the library.

## Pilot scope

| Component | Figma source                          | Public API                                                          | Semantic base          | Implemented coverage                                                             |
| --------- | ------------------------------------- | ------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------- |
| Button    | `🔘 Buttons` (`226:543`)              | `variant`, `size`, `loading`, icons, native button props            | `<button>`             | Primary, Secondary, Ghost, Tertiary; sm/md/lg; disabled/loading; interaction CSS |
| Input     | `Input` (`377:452`)                   | label, help/error, action, counter, horizontal, icons, text/file    | `<input>` + `<label>`  | Default, focus, filled, disabled, error; vertical/horizontal                     |
| Select    | `Combobox Auto-complete` (`496:4879`) | label, help/error, counter, size, leading icon, native select props | `<select>` + `<label>` | md/sm, hover/focus/disabled/error, native option behavior                        |

## Architecture validated

- Public components and types are exported only from `@mosaic-ds/react`.
- React and Next.js consumers share one framework-neutral implementation.
- Token CSS and component CSS are bundled into the explicit `@mosaic-ds/react/styles.css` entry.
- CSS uses logical properties so layout follows the surrounding `dir` value.
- SVGs exported from Figma are bundled into JavaScript as data URLs; consumers do not need asset-loader configuration.
- Native controls provide the keyboard and screen-reader baseline. Labels, descriptions, invalid state, disabled state, and loading state are represented semantically.
- Stories are colocated with components and discovered by the central Storybook application.
- Tests cover behavior and automated axe checks without asserting private DOM implementation details.

## Fidelity decisions

- The Button implementation follows the rendered Figma variants when component descriptions conflict with visuals.
- Exact Figma-exported SVGs are used for Button loaders and Select adornments.
- Audited values use existing tokens wherever a matching token exists. Exact literals remain only where Figma has no bound local token; these are tracked in `DESIGN-DECISIONS.md`.
- Select uses the audited combobox field visuals on a native `<select>`. The separate Figma `Dropdown / Select` row does not define a complete custom popup, so it is not treated as sufficient interaction specification.
- Tertiary Button receives a keyboard focus indicator to avoid an inaccessible invisible focus state. Figma still needs approved interaction visuals.

## Accessibility findings

Unit-level axe checks pass for structure and semantics with color contrast excluded because jsdom has no layout engine. Storybook's browser-based axe scan identified two inherited visual violations:

- Secondary Button: off-white `#f9fafb` text on secondary green `#10b981` is **2.42:1**.
- Form help text: secondary green `#10b981` on white `#ffffff` is **2.53:1**.

Both are below WCAG AA's 4.5:1 requirement for 14px regular text. The implementation preserves Figma fidelity and records the palette change as **Needs Design Decision**. This pilot must not be described as fully WCAG-conformant until the approved colors pass browser-based verification.

## Review gate before Phase 4

Product Design and Engineering should review the unresolved Button naming/state questions, Select behavior, horizontal Input feedback layout, and component-level token proposal in `DESIGN-DECISIONS.md`. Full cross-browser, screen-reader, and systematic Figma screenshot comparison belong to Phases 6 and 7.
