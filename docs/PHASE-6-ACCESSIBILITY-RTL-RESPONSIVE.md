# Phase 6: Documentation, Accessibility, RTL, and Responsive Behavior

Phase 6 completes the implementation guidance and cross-cutting behavior layer. It does not perform the systematic Figma/code pixel comparison, browser matrix, or screenshot-diff work reserved for Phase 7.

## Delivered

- Component-level Storybook descriptions for every Phase 5 group, including semantics and keyboard expectations.
- Explicit RTL stories and Arabic-label examples for directional and localized components.
- Calendar grid structure and keyboard navigation.
- Tabs and DashboardToggle RTL-aware roving focus.
- DatePicker and TimePicker popup focus entry, Escape handling, and focus restoration.
- Tooltip Escape dismissal and preservation of consumer-supplied descriptions.
- Localizable pagination, calendar, sidebar, top-navigation, breadcrumb, and toast labels.
- ToastViewport region semantics and nonfunctional Sidebar collapse-button removal when no callback exists.
- Global reduced-motion and forced-colors focus support.
- Intrinsic responsive sizing, wrapping, and local overflow rules that avoid unapproved breakpoint assumptions.
- Accessibility and RTL/responsive handoff documents with consumer responsibilities and release checklists.

## Validation boundary

Automated unit and axe checks cover representative semantics and behavior. Browser checks cover the running Storybook at desktop, narrow, LTR, and RTL states. These checks validate implementation behavior, not final visual equivalence.

The Phase 6 live checks confirmed picker focus entry/restoration, mirrored RTL arrow-key behavior, and page-level reflow at 320 CSS pixels. The Calendar RTL story retains one known serious axe finding: outside-month date text is 1.77:1 against white. That Figma-derived color remains unchanged pending the explicit token decision recorded in `DESIGN-DECISIONS.md`.

The following remain Phase 7:

- systematic screenshot comparison against each Figma variant;
- pixel-diff tolerances and discrepancy classification;
- full browser/device matrix;
- complete manual screen-reader matrix;
- visual regression infrastructure.

Known Figma contrast failures and unspecified product policies remain in `DESIGN-DECISIONS.md`. They are documented exceptions, not silently invented requirements.
