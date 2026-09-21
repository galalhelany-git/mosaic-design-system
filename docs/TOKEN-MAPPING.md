# Token Mapping

Phase 2 preserves audited Figma primitives and does not invent semantic aliases.

## Naming rule

| Figma                                | TypeScript                                  | CSS                                   |
| ------------------------------------ | ------------------------------------------- | ------------------------------------- |
| `Primary/primary-500`                | `colorTokens['color.primary.500']`          | `--mosaic-color-primary-500`          |
| `Secondary/secondary-500`            | `colorTokens['color.secondary.500']`        | `--mosaic-color-secondary-500`        |
| `NeutralColors/PrimaryText-JetBlack` | `colorTokens['color.neutral.text.primary']` | `--mosaic-color-neutral-text-primary` |
| `AccentColors/Error❌`               | `colorTokens['color.status.error']`         | `--mosaic-color-status-error`         |
| `spacing 16`                         | `spacingTokens['spacing.16']`               | `--mosaic-spacing-16`                 |
| Text style `H1`                      | `typographyTokens.h1`                       | `--mosaic-typography-h1-*`            |
| Effect style `Elevation/Depth8`      | `elevationTokens.depth8`                    | `--mosaic-elevation-depth8`           |

The TypeScript names normalize punctuation and spacing but retain the existing conceptual hierarchy. `figma.snapshot.json` records the source and audit limitations.

Figma percentage letter spacing is retained in the TypeScript audit model and converted to the
equivalent `em` value in CSS because CSS does not accept percentage values for `letter-spacing`.

## Semantic layer

`semanticTokens` is intentionally empty. Before adding entries such as `color.action.primary` or `color.text.primary`, Product Design must approve:

- which primitive each role aliases;
- whether aliases change by light/dark/high-contrast mode;
- whether external-library tokens are migrated, retained, or removed;
- which status, focus, disabled, and selected roles are canonical.

## Duplicate source values

Figma contains multiple off-white variables with the same value and duplicate `NeutralColors/Background-OffWhite 2` names. The generated package exposes one primitive value; the duplicate Figma identifiers remain recorded as audit debt rather than becoming duplicate code tokens.
