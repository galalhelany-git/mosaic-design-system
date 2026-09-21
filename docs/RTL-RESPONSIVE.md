# RTL and Responsive Behavior

Figma contains no approved Arabic examples or breakpoint values. Phase 6 therefore implements direction-safe and intrinsically responsive behavior without inventing product breakpoints. Product Design review is still required before visual sign-off.

## Directionality contract

- Place a `dir="ltr"` or `dir="rtl"` value on `data-mosaic-root` or an ancestor. Storybook exposes this through the direction toolbar.
- Component CSS uses logical properties (`inline-size`, `margin-inline-*`, `padding-inline-*`, `border-inline-*`, `inset-inline-*`, `text-align: start`).
- Layout order follows the document direction unless the interaction uses a vertical axis.
- Directional breadcrumb, pagination, sidebar, and calendar chevrons mirror in RTL.
- Horizontal Tabs, DashboardToggle, and Calendar mirror Left/Right keyboard movement in RTL. Vertical Up/Down behavior does not change.
- Numbers, dates, times, email addresses, and other bidirectional content should receive an application-owned `dir="auto"` or explicit direction where needed.
- Icons that communicate physical direction mirror. Brand marks, media controls, charts, checkmarks, and non-directional symbols do not mirror automatically.

## Intrinsic responsive behavior

Because no breakpoint tokens exist, components respond to available space rather than viewport guesses:

- Form controls and pickers cap their audited Figma width at `100%`.
- Calendar and picker surfaces preserve their internal day grid and use bounded horizontal overflow when the host is narrower than the audited anatomy.
- Breadcrumb wraps and allows long labels to break.
- Horizontal Tabs, Pagination, DashboardToggle, ButtonGroup, and TopNavigation expose local horizontal overflow instead of causing page-level overflow.
- Sidebar is capped at the containing inline size; expanded/collapsed state remains controlled by the application.
- Toast, Snackbar, Dialog, FileUploader, Accordion, and other panel components use `min()`/`max-inline-size` so they shrink within their container.
- Full Dialog uses dynamic viewport units and retains a 16px viewport inset.

Local scrolling is intentional for controls whose audited anatomy cannot safely reflow without a design decision. Applications should preserve a visible scroll affordance and avoid nesting them inside another horizontal scroller.

## Application layout responsibilities

- Decide when desktop navigation becomes a drawer, bottom navigation, or another mobile pattern.
- Decide whether Sidebar collapsed state persists between routes/sessions and restore focus after drawer close.
- Provide container width, page gutters, grid placement, and application-level breakpoints.
- Test long localized labels, browser text enlargement, safe areas, virtual keyboards, and orientation changes.
- Do not use CSS order to create a visual sequence that differs from DOM and keyboard order.

## Verification matrix

At minimum, review each component at:

| Dimension   | Values                                                                 |
| ----------- | ---------------------------------------------------------------------- |
| Direction   | LTR, RTL                                                               |
| Width       | 320px, 768px, 1280px                                                   |
| Zoom        | 100%, 200%, 400%                                                       |
| Content     | English, Arabic, long translated labels, numeric/bidirectional strings |
| Input       | Keyboard, pointer, touch-sized viewport                                |
| Preferences | Reduced motion, forced colors/high contrast                            |

Breakpoint-specific transformations remain **Needs Design Decision** until Product Design adds approved thresholds and responsive variants to Figma.
