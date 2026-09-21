# Accessibility

Mosaic targets WCAG 2.2 AA for implementation behavior. Figma remains the source of visual intent, but native HTML and established ARIA interaction patterns take precedence when a static design cannot express semantics.

Automated checks are a regression guard, not a conformance claim. A release still requires keyboard, screen-reader, zoom/reflow, forced-colors, reduced-motion, and cross-browser review.

## Baseline behavior

- Interactive elements use native buttons, anchors, inputs, select elements, textarea elements, and dialog elements wherever their semantics match.
- Icon-only controls require an accessible name.
- Visible field labels are programmatically associated with controls. Help and error content is referenced with `aria-describedby`; invalid fields expose `aria-invalid`.
- Focus uses `:focus-visible`. Forced-colors mode adds a system-color outline, and reduced-motion preferences reduce component transitions and animation.
- Status updates use polite `role="status"`; errors use assertive `role="alert"`.
- Current, selected, checked, expanded, busy, disabled, and progress states use the matching native or ARIA state.
- Components do not encode meaning with color alone; visible text, shape, icons, or semantic state remains available.

## Keyboard contract

| Component                       | Keyboard behavior                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button, IconButton, CloseButton | Native Enter/Space activation                                                                                                                        |
| Checkbox, Radio, Switch         | Native form-control behavior; arrow movement between same-name radios is browser-owned                                                               |
| Select                          | Native platform select behavior                                                                                                                      |
| Accordion                       | Enter/Space toggles the disclosure; focus remains on the trigger                                                                                     |
| Tabs                            | Left/Right for horizontal tabs, Up/Down for vertical tabs, Home/End for boundaries; horizontal direction mirrors in RTL                              |
| DashboardToggle                 | Arrow keys move and select; Home/End select boundaries; horizontal arrows mirror in RTL                                                              |
| Calendar                        | Arrow keys move by day/week, Home/End move to week boundaries, Page Up/Down move by month; horizontal movement mirrors in RTL                        |
| DatePicker                      | Enter/Space opens; focus enters the calendar; Escape closes and returns focus to the trigger                                                         |
| TimePicker                      | Enter/Space or Arrow Up/Down opens; Arrow Up/Down moves options; Home/End moves to boundaries; Enter/Space selects; Escape closes and restores focus |
| Dialog                          | Native modal focus containment, Escape cancel, and focus restoration; the consumer owns controlled open state                                        |
| Tooltip                         | Appears on hover or focus and closes on blur, pointer leave, or Escape                                                                               |
| Pagination                      | Native button activation; disabled boundary controls remain unavailable                                                                              |
| FileUploader                    | Enter/Space opens the native file chooser; drag/drop is an additional input method, not the only method                                              |

## Consumer responsibilities

- Provide meaningful labels, descriptions, alternative text, button text, and link destinations.
- Use `aria-label` only when a visible label is unavailable. Do not duplicate a visible label unnecessarily.
- Connect application validation and server errors to the relevant field.
- Move focus deliberately after application-level route changes, destructive operations, or async workflow completion.
- Do not put interactive content inside `Tooltip`.
- Choose `Toast` versus error `Toast`/`Snackbar` based on announcement urgency. Avoid repeated or long assertive announcements.
- Supply translated labels for calendar navigation, pagination, sidebar controls, toast dismissal, and other built-in actions.
- Keep Dialog titles unique and concise. Do not nest modal dialogs without an approved product pattern.

## Known exceptions requiring design decisions

- Several inherited Figma color combinations fail normal-text contrast, including the Secondary Button, some status/help text combinations, and Calendar outside-month dates (1.77:1 in the Phase 6 live axe check).
- Switch `indeterminate` has no approved semantic meaning because ARIA switch is binary.
- CloseButton has a persistent selected visual whose product meaning is not defined.
- Tooltip touch behavior and notification timeout/queue policies are not specified.
- Dark and high-contrast theme tokens are not present in Figma. Forced-colors support relies on system colors rather than an authored Mosaic theme.

These exceptions remain tracked in `DESIGN-DECISIONS.md` and prevent a blanket conformance claim.

## Release review checklist

1. Complete the workflow with keyboard only, including reverse tab order.
2. Verify visible focus at 100%, 200%, and 400% zoom.
3. Verify accessible names, roles, states, descriptions, errors, and live announcements with VoiceOver and at least one second screen reader/platform combination.
4. Test reduced motion and forced-colors/high-contrast settings.
5. Test content reflow at a 320 CSS-pixel viewport without two-dimensional page scrolling, except for intentionally scrollable data or navigation regions.
6. Test LTR and RTL with localized strings that are longer than the English examples.
7. Run automated axe checks and treat new serious/critical violations as release blockers.
