# Phase 4 Primitive Components

Phase 4 scales the validated package architecture to the remaining implementation-ready primitives. It does not include navigation, overlays, calendars, uploaders, or other composite behavior reserved for Phase 5.

## Implemented mapping

| Figma source                                           | React API     | Semantic base                    | Coverage                                                                       |
| ------------------------------------------------------ | ------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| Icon Buttons (`305:3231`)                              | `IconButton`  | `<button>`                       | sm/md/lg, hover, focus, active, disabled, loading, notification                |
| Close Buttons (`466:897`)                              | `CloseButton` | `<button>`                       | sm/md/lg, selected, focus, disabled                                            |
| Checkbox Base (`399:1701`)                             | `Checkbox`    | `<input type="checkbox">`        | unchecked, checked, mixed, focus, disabled                                     |
| Radio button (`445:2066`)                              | `Radio`       | `<input type="radio">`           | unselected, selected, focus, disabled                                          |
| Switch (`445:2082`)                                    | `Switch`      | checkbox with `role="switch"`    | md/sm, off/on, intermediate, focus, disabled                                   |
| Textarea (`493:963`)                                   | `Textarea`    | `<textarea>` + `<label>`         | empty, filled, focus, error, disabled, help, count                             |
| Command Base / Search (`419:2092`)                     | `SearchField` | `<input type="search">`          | empty, filled, focus, disabled                                                 |
| Badge (`466:934`)                                      | `Badge`       | `<span>`                         | default, secondary, outline, error, rounded/square                             |
| status (`526:1627`)                                    | `StatusBadge` | `<span>`                         | active, inactive, pending, suspended, expired                                  |
| Progress (`889:9167`)                                  | `Progress`    | `role="progressbar"`             | xs/sm/md/lg, continuous determinate values                                     |
| Divider Horisontal / Vertical (`445:2037`, `445:2046`) | `Divider`     | `role="separator"`               | horizontal/vertical, solid/dashed, four weights, horizontal label              |
| Avatar (`294:23`)                                      | `Avatar`      | image or named initials fallback | five sizes, three shapes, image/initials, online/offline, role badge, disabled |

## API and behavior choices

- Browser interaction states are CSS pseudo-classes rather than React props unless Figma represents persistent application state.
- Native inputs preserve keyboard, form, required, disabled, and change semantics.
- Visual dimensions remain Figma-aligned, while widths that are layout-owned use fluid CSS with the audited Figma width as a maximum.
- Public size names use conventional `xs` and `xl` for Avatar and Progress. Divider retains Figma's unusual `hg` until Product Design approves a rename.
- Avatar hover/active visuals apply only when the consumer makes the element focusable. Static avatars remain purely presentational.

## Verification completed

- Strict TypeScript passes across all workspaces.
- ESLint passes.
- 22 Vitest tests pass, including native interaction and representative axe checks.
- Token, React package, and production Storybook builds pass.
- Storybook includes controls and meaningful state, size, disabled, and RTL examples.

Systematic pixel-diff comparison, cross-browser checks, and manual screen-reader verification remain Phase 7 work. Known visual/semantic ambiguities are recorded in `DESIGN-DECISIONS.md` instead of being silently resolved.
