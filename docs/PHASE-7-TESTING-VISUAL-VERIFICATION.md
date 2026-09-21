# Phase 7: Testing and Figma/Code Visual Verification

Phase 7 completes the systematic verification pass for the implemented Mosaic library. The review compared every implemented component group with its Figma source, exercised representative interactive states, checked LTR/RTL and narrow layouts, expanded automated behavior coverage, and resolved discrepancies that could be corrected without inventing product policy.

Review date: **2026-09-19**  
Figma source: [Mosaic Design System](https://www.figma.com/design/Ey0gHNOBazFph9cdmuI3NI/%F0%9F%9F%A2-Mosaic-Design-System?node-id=7-9)  
Evidence: [`docs/visual-verification`](./visual-verification/README.md)

## Outcome

- **36 of 36 implemented component groups reviewed** against source screenshots.
- **0 open Critical implementation discrepancies** after fixes.
- **44 automated tests** across 7 files.
- Coverage: **81.74% statements, 70% branches, 84.61% functions, 87.58% lines**.
- Desktop rendering captured at **1440×900**.
- Targeted narrow and RTL rendering captured at **320×700** with no page-level horizontal overflow in TopNavigation, Sidebar, Calendar, Tabs, or an open DatePicker.
- Tooltip, DatePicker, TimePicker, and Dialog were opened through their real controls before capture.

## Resolved discrepancies

| Severity | Component              | Finding                                                                                                                                          | Resolution                                                                                                        |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Critical | DatePicker, TimePicker | Percentage width on a shrink-to-fit wrapper collapsed triggers to minimum-content width, producing unreadable labels and unusable RTL rendering. | Assigned the audited intrinsic wrapper widths and made each trigger fill its wrapper.                             |
| Major    | Snackbar               | The status icon rendered as a short pale pill, the success title remained navy, and dismiss controls were hidden until hover.                    | Restored the 48px solid success/error icon tile, matching title/action colors, and persistent dismiss affordance. |
| Minor    | Pagination             | Previous/Next controls added chevrons that are absent from Figma node `338:1171`.                                                                | Removed the extra chevrons while retaining localized accessible labels and RTL-safe text flow.                    |

## Open discrepancies and explicit limits

No open item below is silently accepted as pixel-perfect or production policy.

### Major

- **Inherited contrast:** Secondary Button text, green help text, several status badges, and Calendar outside-month text remain below WCAG AA in the source palette. The live Calendar result remains 1.77:1 for outside-month dates. Token changes require Product Design approval.
- **Select behavior:** Figma shows custom combobox/list-row visuals, while code intentionally uses a native Select pilot until popup, filtering, and keyboard contracts are approved.
- **TimePicker composition:** Figma composes date calendars and time rows; code exposes an accessible standalone time listbox. Date-time coupling, validation, locale, and timezone behavior remain product decisions.
- **Navigation responsiveness:** Figma defines desktop expanded/collapsed states but no breakpoints, drawer behavior, persistence, or focus return. Code provides intrinsic overflow and controlled collapse without inventing a breakpoint.
- **Overlay policy:** Tooltip and picker placement match their documented base positions, but collision detection, portals, nested overlays, and mobile-sheet behavior are unspecified.
- **Typography ownership:** Figma mixes Poppins, Inter, Geist, and Helvetica Neue. Components preserve the audited token mapping; a single canonical loading strategy is not approved.

### Minor

- Storybook uses neutral sample copy and consumer-provided icons/slots in TopNavigation, Sidebar, Dialog, Toast, and FileUploader. Anatomy and metrics were compared; exemplar content is not hard-coded into reusable components.
- Calendar and picker surfaces preserve their 278–284px intrinsic grid width. Containers narrower than that scroll internally instead of compressing 36px day targets.
- Figma has no approved Arabic screen examples. RTL behavior is implementation-tested, but visual language sign-off still requires Product Design.

The complete policy backlog remains in [`DESIGN-DECISIONS.md`](../DESIGN-DECISIONS.md).

## Component comparison matrix

`Aligned` means the reviewed anatomy and available state are represented. `Aligned with decision` means the implementation matches the approved Phase 3–6 scope while a documented product/design decision remains open.

| Component group    | Figma node | Storybook evidence                                                     | Result                                                |
| ------------------ | ---------- | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| Button             | `226:543`  | `button-variants.png`, `button-sizes.png`                              | Aligned; exact representative metrics measured        |
| Input              | `377:452`  | `input-error.png`                                                      | Aligned with inherited contrast decision              |
| Select             | `496:4879` | `select-error.png`                                                     | Aligned with native-select decision                   |
| IconButton         | `305:3231` | `icon-button-sizes.png`                                                | Aligned                                               |
| CloseButton        | `466:897`  | `close-button-sizes.png`, `close-button-selected.png`                  | Aligned with selected-state decision                  |
| Checkbox           | `399:1701` | `checkbox-checked.png`, `checkbox-indeterminate.png`                   | Aligned                                               |
| Radio              | `445:2066` | `radio-selected.png`                                                   | Aligned                                               |
| Switch             | `445:2082` | `switch-intermediate.png`                                              | Aligned with intermediate-state decision              |
| Textarea           | `493:963`  | `textarea-error.png`                                                   | Aligned with inherited contrast decision              |
| SearchField        | `419:2092` | `search-filled.png`                                                    | Aligned                                               |
| Badge              | `466:934`  | `badge-variants.png`                                                   | Aligned with interaction/contrast decisions           |
| StatusBadge        | `526:1627` | `status-badge-all.png`                                                 | Aligned with inherited contrast decision              |
| Progress           | `889:9167` | `progress-sizes.png`                                                   | Aligned                                               |
| Divider horizontal | `445:2037` | `divider-text.png`                                                     | Aligned with naming decision                          |
| Divider vertical   | `445:2046` | `divider-vertical.png`                                                 | Aligned                                               |
| Avatar             | `294:23`   | `avatar-sizes.png`, `avatar-status.png`                                | Aligned with focus-color decision                     |
| ButtonGroup        | `728:1436` | `button-group.png`                                                     | Aligned                                               |
| Accordion          | `466:876`  | `accordion-open.png`                                                   | Aligned                                               |
| Breadcrumb         | `333:514`  | `breadcrumb-collapsed.png`                                             | Aligned                                               |
| Tabs horizontal    | `338:1112` | `tabs-line.png`, `tabs-rtl-320.png`                                    | Aligned                                               |
| Tabs vertical      | `338:1137` | `tabs-vertical.png`                                                    | Aligned                                               |
| Pagination         | `338:1171` | `pagination.png`                                                       | Aligned after Phase 7 icon fix                        |
| DashboardToggle    | `729:1929` | `dashboard-toggle.png`                                                 | Aligned with content/API decision                     |
| TopNavigation      | `305:3223` | `top-navigation.png`, `top-navigation-rtl-320.png`                     | Aligned anatomy; consumer slots differ                |
| Sidebar            | `308:1334` | `sidebar-expanded.png`, `sidebar-collapsed.png`, `sidebar-rtl-320.png` | Aligned with responsive policy decision               |
| Tooltip            | `379:15`   | `tooltip-open.png`                                                     | Aligned; placement policy remains open                |
| Toast              | `466:1086` | `toast.png`                                                            | Aligned with lifecycle decision                       |
| Snackbar           | `466:1109` | `snackbar.png`                                                         | Aligned after Phase 7 status-style fix                |
| ToastViewport      | `875:4386` | `toast-viewport.png`                                                   | Aligned with lifecycle decision                       |
| Dialog             | `466:1049` | `dialog-open.png`, `dialog-full.png`                                   | Aligned anatomy; product policy remains open          |
| Calendar           | `865:5289` | `calendar-presets.png`, `calendar-rtl-320.png`                         | Aligned with date/contrast decisions                  |
| DatePicker         | `871:7652` | `date-picker-open.png`, `date-picker-rtl-320-open.png`                 | Aligned after Phase 7 sizing fix                      |
| TimePicker         | `871:9003` | `time-picker-open.png`                                                 | Standalone control aligned; composition decision open |
| FileUploader       | `887:7885` | `file-uploader.png`                                                    | Aligned with upload-lifecycle decision                |
| RoleBadge          | `304:383`  | `role-badge-roles.png`                                                 | Aligned                                               |
| RoleBadgeCell      | `536:2547` | `role-badge-cells.png`                                                 | Aligned                                               |

## Automated quality coverage

The Phase 7 boundary suite adds coverage for:

- ButtonGroup labelling and orientation.
- CloseButton selected semantics and custom names.
- Textarea counters, limits, and feedback association.
- Disabled SearchField behavior and Avatar status naming.
- Pagination clamping and localized labels.
- TopNavigation and Sidebar landmarks and collapse callbacks.
- Dialog close and native cancel contracts.
- Toast actions, dismissal, and stacked viewport state.
- Calendar disabled-day keyboard skipping.
- Disabled FileUploader drop protection.

The full suite also retains native input, keyboard navigation, focus restoration, RTL arrow behavior, live-region, drag/drop, and representative automated axe coverage from earlier phases.

## Browser and assistive-technology matrix

| Surface                    | Desktop | 320px | LTR | RTL | Interactive controls | Result                                        |
| -------------------------- | ------: | ----: | --: | --: | -------------------: | --------------------------------------------- |
| Codex in-app browser       |       ✓ |     ✓ |   ✓ |   ✓ |                    ✓ | Passed with documented source decisions       |
| Production Storybook build |       ✓ |     — |   ✓ |   ✓ |         Static build | Passed                                        |
| Safari                     |       — |     — |   — |   — |                    — | Not run in this environment                   |
| Firefox                    |       — |     — |   — |   — |                    — | Not run in this environment                   |
| Edge                       |       — |     — |   — |   — |                    — | Not run in this environment                   |
| VoiceOver / NVDA / JAWS    |       — |     — |   — |   — |                    — | Manual validation not run in this environment |

Automated semantics and axe checks reduce regression risk, but they do not replace the unrun browser and screen-reader rows. Phase 7 therefore closes implementation verification without claiming universal browser parity or blanket WCAG conformance.
