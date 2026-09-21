# Developer Handoff

## Responsibilities

- **Figma:** design intent, visual specifications, approved anatomy, variants, and UX decisions.
- **Token package:** versioned implementation of approved foundations.
- **Storybook:** implemented behavior, supported properties, accessibility notes, and examples.
- **React package:** production components consumed by applications.
- **Repository:** implementation history, decisions, tests, contribution workflow, and releases.

Developers should consume the production package rather than rebuilding components from Figma. A Figma variant is not automatically a React prop: hover, focus, and pressed states generally belong to browser interaction, while loading or disabled states may be API properties.

Visual discrepancies must be recorded and classified as Critical, Major, or Minor. They must not be silently accepted.

## Accessibility handoff

- Use the keyboard contracts and release checklist in `docs/ACCESSIBILITY.md`.
- Preserve native props and semantics when composing Mosaic components.
- Localize component-owned control labels; visible product copy alone does not translate labels such as “Next page” or “Dismiss notification.”
- Treat documented contrast exceptions as release risks until Product Design approves replacement tokens.
- Automated axe tests are required but do not replace keyboard, zoom/reflow, forced-colors, or screen-reader review.

## Direction and responsive handoff

- Set `dir` at the application/root locale boundary and avoid per-component direction overrides unless the content itself requires it.
- Follow `docs/RTL-RESPONSIVE.md` for mirrored controls, bidirectional content, and the intrinsic sizing contract.
- The library does not invent application breakpoints. Host layouts own navigation transformation, page grid, safe areas, and drawer behavior.
- Test long translated labels and 320px containers before release.
