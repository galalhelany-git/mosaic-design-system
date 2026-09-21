# Phase 5 Composite Components

Phase 5 implements the complex and composed patterns that were audited from Figma. It preserves the Phase 3/4 package boundary and uses semantic HTML, typed composition slots, and logical CSS properties. Full accessibility review, responsive policy, RTL visual sign-off, and systematic Figma/code image comparison remain Phase 6/7 work.

## Implemented mapping

| Figma source                                                         | React API                                | Semantic/behavior base                                                |
| -------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| Button Group (`728:1436`)                                            | `ButtonGroup`                            | labelled `role="group"` around consumer-provided buttons              |
| Accordion (`466:876`)                                                | `Accordion`                              | heading + disclosure button + controlled/uncontrolled open state      |
| Breadcrumb (`333:514`)                                               | `Breadcrumb`                             | `<nav>` + ordered list + current-page and overflow semantics          |
| Tabs Horizontal / Vertical (`338:1112`, `338:1137`)                  | `Tabs`                                   | ARIA tablist with arrow, Home, and End key behavior                   |
| Pagination (`338:1171`)                                              | `Pagination`                             | labelled `<nav>`, bounded Previous/Next, current page                 |
| Dashboard Toggle (`729:1929`)                                        | `DashboardToggle`                        | single-select radiogroup                                              |
| Top Navigation Bar (`305:3223`)                                      | `TopNavigation`                          | semantic header with brand, navigation, action, and account slots     |
| Sidebar / menu item (`308:1334`, `308:1262`)                         | `Sidebar`, `SidebarItem`                 | `<aside>` + `<nav>`, anchor/button items, expanded/collapsed states   |
| Tooltip (`379:15`)                                                   | `Tooltip`                                | hover and focus trigger, `role="tooltip"`, four placements            |
| Toast / Snackbar / Toast-Sooner (`466:1086`, `466:1109`, `875:4386`) | `Toast`, `Snackbar`, `ToastViewport`     | polite status or assertive alert; expanded/stacked viewport           |
| Dialog Header / Footer / Main (`466:975`, `466:1012`, `466:1049`)    | `DialogHeader`, `DialogFooter`, `Dialog` | native modal `<dialog>`, Escape/cancel handling, labelled title       |
| Calendar (`865:5289`)                                                | `Calendar`                               | single/range selection, month navigation, optional presets            |
| Date Picker (`871:7652`)                                             | `DatePicker`                             | accessible trigger + calendar dialog, single/range/preset composition |
| Time Picker (`871:9003`)                                             | `TimePicker`                             | labelled listbox trigger with configurable start/end/step             |
| File Uploader (`887:7885`)                                           | `FileUploader`                           | native file input, keyboard browse, drag/drop, upload progress        |
| Role Badge / Cell (`304:383`, `536:2547`)                            | `RoleBadge`, `RoleBadgeCell`             | four roles, 16/32 sizes, exact exported Figma role icons              |

## API choices

- Navigation shells accept React nodes for product-owned brand, account, icon, and action content; the design-system package does not hardcode application routing or user data.
- `SidebarItem` selects anchor semantics when `href` is supplied and button semantics otherwise.
- `Tabs`, `DashboardToggle`, `Accordion`, `DatePicker`, and `TimePicker` support controlled or uncontrolled state where product applications commonly need either mode.
- Calendar values use JavaScript `Date` objects. Formatting is locale-aware through `Intl.DateTimeFormat`; server persistence and timezone conversion remain application concerns until Product Design and Product Engineering approve a date policy.
- File upload transport, retry, cancellation, validation messaging, and server progress are consumer-owned. The component owns file selection/drop interaction and renders supplied progress.
- Toast lifecycle, queuing, timeout, persistence, and portal placement are not invented. `ToastViewport` only renders the audited stacked/expanded visual arrangement.
- Native `<dialog>` supplies modal focus containment and Escape behavior in supported browsers. Applications control the `open` state and own destructive-action policy.

## Verification completed

- Strict TypeScript passes for the React package.
- The root Vitest suite passes 32 tests across six files.
- Composite tests cover disclosure, tab keyboard navigation, pagination limits, navigation landmarks, calendar/date/time selection, drag/drop, live-region semantics, dashboard selection, and role identity.
- Storybook stories cover Figma variants and interactive examples for every exported Phase 5 component group.

## Deferred decisions

The following are deliberately not represented as invented production behavior:

- Custom Dropdown/Select popup behavior remains deferred; the Phase 3 native `Select` pilot stays canonical.
- Calendar locale defaults, timezone/storage policy, date constraints, week-start policy, and date-format rules need Product Design/Product Engineering approval.
- Time Picker Figma anatomy combines date and time surfaces, but its final cross-field validation contract is not specified.
- Tooltip delay, collision/flip behavior, portal strategy, and touch behavior need a product interaction specification.
- Toast duration, queue limits, announcement priority, and dismissal persistence need a notification policy.
- Sidebar breakpoint/collapse policy and Top Navigation responsive transformations need approved breakpoints.
- Dialog size thresholds, mobile treatment, destructive-action confirmation, and nested-dialog policy remain unspecified.
- File validation, maximum sizes/counts, retry/cancel behavior, and error content need an upload product contract.

These items are also recorded in `DESIGN-DECISIONS.md` and must be resolved before the final production-readiness claim.
