# Figma Audit

Source: [Mosaic Design System](https://www.figma.com/design/Ey0gHNOBazFph9cdmuI3NI/%F0%9F%9F%A2-Mosaic-Design-System?node-id=7-9)

Audited on 2026-09-13. The audit was read-only.

## Inventory

| Asset                 | Count |
| --------------------- | ----: |
| Pages                 |    19 |
| Populated pages       |    16 |
| Component sets        |    52 |
| Standalone components |     7 |
| Variant components    |   667 |
| Local variables       |    42 |
| Paint styles          |    30 |
| Text styles           |    11 |
| Effect styles         |    11 |
| Grid styles           |     9 |

## Principal findings

- The local token model is primitive-only and has no semantic aliases.
- Color variables have one mode named `Mode 1`; no dark or high-contrast mode exists.
- Components depend on numerous external token and component libraries.
- Poppins, Inter, Geist, and Helvetica Neue appear in component implementations.
- No Arabic or RTL component examples were found.
- Grid styles describe desktop, tablet, and mobile column systems, but no breakpoint thresholds are defined.
- Four cursor component sets have pre-existing Figma variant errors.
- Code Connect is blocked by the current Figma plan or seat.

## External token collections observed

Tailwind Primitives, Typography, Primitives, shadcn/ui, GalalHelany/ui, Theme-variables, themes, alias, radii, spacing, typography, and font sizes.

These dependencies must be reconciled before the token package can be considered independently reproducible.

## Sparse variant sets

Buttons, Button Group, Switch, Calendar Day, File Uploader, Sidebar Item, Tab Item, Pagination Item, Tooltip, Badge, Horizontal Divider, Dialog Header, Dialog Footer, and Avatar do not contain every possible combination of their declared axes. Missing combinations are not generated automatically.
