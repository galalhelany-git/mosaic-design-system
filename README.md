# Mosaic Design System

A production-ready design system for **Mosaic**, built to translate a
complex enterprise product experience from Figma into reusable,
documented, and developer-ready React components.

The system connects design and engineering through shared design tokens,
typed component APIs, Storybook documentation, accessibility
considerations, and reusable enterprise UI patterns.

> **Figma → Design Tokens → React + TypeScript → Storybook → Product**

------------------------------------------------------------------------

## Overview

Mosaic is a specialized enterprise ERP experience supporting complex
workflows, interconnected business objects, user roles, permissions,
data-heavy interfaces, and operational processes.

The Mosaic Design System was created to establish a consistent
interaction and visual language across those workflows while providing
developers with reusable production components instead of requiring
individual interfaces to be recreated from Figma.

This repository contains the coded implementation and developer
documentation for that system.

------------------------------------------------------------------------

## Goals

The design system is intended to:

-   Create consistency between design and implementation
-   Translate Figma foundations into reusable design tokens
-   Provide production-ready React components
-   Establish predictable component APIs
-   Reduce repeated frontend implementation
-   Support complex enterprise workflows
-   Document component behavior and usage
-   Improve designer--developer collaboration
-   Support accessibility requirements
-   Provide scalable foundations for future Mosaic modules

------------------------------------------------------------------------

## Design-to-Code Workflow

``` text
Figma Design System
        ↓
Figma Variables
        ↓
Design Tokens
        ↓
Semantic Tokens
        ↓
React + TypeScript
        ↓
Storybook
        ↓
Mosaic Product
```

### Figma

Figma defines:

-   Design intent
-   Foundations
-   Variables
-   Component anatomy
-   Variants
-   States
-   Layout rules
-   Interaction behavior

### Design Tokens

Tokens provide the shared language between design and code and include:

-   Color
-   Typography
-   Spacing
-   Radius
-   Elevation
-   Other reusable visual properties

Components consume semantic tokens wherever possible rather than
depending directly on arbitrary visual values.

### React + TypeScript

Figma components are translated into reusable typed React components
with controlled APIs.

``` tsx
<Button variant="primary" size="md">
  Create project
</Button>
```

The component API is intended to enforce the design system rather than
bypass it.

### Storybook

Storybook acts as the living developer documentation for the implemented
system.

It provides:

-   Interactive component examples
-   Variants
-   States
-   Component controls
-   API documentation
-   Usage guidelines
-   Accessibility information
-   Responsive examples
-   Enterprise patterns

------------------------------------------------------------------------

## Live Storybook

Explore the implemented design system and component documentation:

**[Open Mosaic Storybook →](STORYBOOK_URL)**

> Replace `STORYBOOK_URL` with the deployed Storybook URL.

------------------------------------------------------------------------

## Technology

The design system uses:

-   **React** --- Component architecture
-   **TypeScript** --- Typed component APIs
-   **Storybook** --- Component development and documentation
-   **CSS Custom Properties** --- Design-token implementation
-   **Vitest** --- Testing
-   **React Testing Library** --- Component and interaction testing
-   **Storybook Accessibility Tools** --- Accessibility checks

------------------------------------------------------------------------

## Design Principles

### Clarity Before Decoration

Mosaic supports complex operational workflows. Interfaces prioritize
comprehension, hierarchy, and task completion over unnecessary visual
decoration.

### Progressive Complexity

Complexity is exposed when the workflow requires it rather than
presenting every possible action simultaneously.

### Consistency Creates Speed

Common interactions behave consistently across modules so users can
transfer knowledge from one workflow to another.

### Preserve Context

Enterprise workflows frequently move between interconnected objects.
Interfaces should preserve enough context for users to understand where
they are, what they are working with, and what actions are available.

### Permissions Are Part of UX

Role and permission management is treated as part of the product
experience rather than only as a backend implementation concern.

### Design for Dense Work

Information density is managed through hierarchy, grouping, tables,
filters, search, spacing, and progressive disclosure.

------------------------------------------------------------------------

## Foundations

The Mosaic Design System provides reusable foundations for:

-   Color
-   Typography
-   Spacing
-   Radius
-   Elevation
-   Icons
-   Layout

### Token Architecture

``` text
Primitive Token
      ↓
Semantic Token
      ↓
Component
```

Actual token names and values are documented in Storybook.

------------------------------------------------------------------------

## Components

The component library is organized around reusable product behaviors.

### Actions

-   Button
-   Icon Button
-   Contextual Actions

### Forms

-   Input
-   Textarea
-   Select
-   Checkbox
-   Radio
-   Switch
-   Form Field

### Navigation

-   Sidebar
-   Tabs
-   Breadcrumb
-   Pagination

### Feedback

-   Status / Badge
-   Tooltip
-   Empty State
-   Loading
-   Error States

### Overlays

-   Dropdown
-   Modal
-   Drawer

### Data Display

-   Card
-   Data Table

See Storybook for the current implementation status and supported APIs.

------------------------------------------------------------------------

## Enterprise Patterns

Mosaic requires patterns beyond individual UI components.

The design system documents recurring enterprise interactions such as:

-   Search
-   Filtering
-   Sorting
-   Data tables
-   Bulk actions
-   Page headers
-   Detail headers
-   Form layouts
-   List → Detail navigation
-   Create / Edit workflows
-   Empty states
-   Loading states
-   Error handling
-   Destructive actions

Patterns describe how multiple components work together to solve
recurring product problems.

------------------------------------------------------------------------

## Data-Heavy Interfaces

Data tables are an important part of Mosaic's enterprise experience.

Depending on the context, tables can support:

-   Sorting
-   Filtering
-   Search
-   Row selection
-   Bulk actions
-   Status indicators
-   Row actions
-   Pagination
-   Loading states
-   Empty states

Column visibility and information density should reflect task importance
rather than simply exposing every available field.

------------------------------------------------------------------------

## Identity & Access Management

The design system also addresses role-based access and
permission-management interfaces.

Representative flow:

``` text
Role Management
       ↓
Create Role
       ↓
Configure Permissions
       ↓
Review Access
       ↓
Create Role
```

Permission interfaces can communicate:

-   Unchecked
-   Checked
-   Indeterminate
-   Disabled

------------------------------------------------------------------------

## Sidebar State Model

Mosaic navigation supports three distinct sidebar states.

### Collapsed

The sidebar is collapsed and the main content can use the available page
width.

### Expanded

The sidebar is temporarily expanded for navigation. This state is
separate from the persistent pinned state.

### Pinned

The sidebar remains permanently visible and becomes part of the page
layout.

``` text
Collapsed
    ↓
  Menu
    ↓
Expanded
    ↓
   Pin
    ↓
Pinned
```

The three states are implemented separately rather than treating
`Expanded` and `Pinned` as the same layout state.

------------------------------------------------------------------------

## Accessibility

Accessibility is considered part of component behavior.

Relevant components should support appropriate:

-   Semantic HTML
-   Keyboard navigation
-   Focus-visible states
-   Accessible names
-   Form labels
-   Error associations
-   Status communication
-   Screen-reader semantics
-   Disabled states
-   Focus management

> Accessibility tooling helps identify issues but does not by itself
> guarantee complete WCAG compliance.

------------------------------------------------------------------------

## Responsive Behavior

Mosaic is primarily a complex enterprise interface.

Responsive behavior focuses on preserving workflow usability rather than
simply shrinking desktop layouts.

Depending on the component, this may include:

-   Reflow
-   Wrapping
-   Stacking
-   Navigation collapse
-   Horizontal table scrolling
-   Progressive disclosure
-   Action prioritization
-   Responsive overlays

------------------------------------------------------------------------

## Project Structure

``` text
mosaic-design-system/
│
├── .storybook/
├── src/
│   ├── components/
│   ├── tokens/
│   ├── icons/
│   ├── hooks/
│   ├── utilities/
│   ├── styles/
│   └── index.ts
├── docs/
├── tests/
├── package.json
├── tsconfig.json
├── README.md
├── CONTRIBUTING.md
└── CHANGELOG.md
```

Refer to the repository itself for the current structure.

------------------------------------------------------------------------

## Getting Started

### Prerequisites

Install a current supported version of Node.js and the package manager
used by this repository.

``` bash
git clone REPOSITORY_URL
cd mosaic-design-system
npm install
```

------------------------------------------------------------------------

## Run Storybook Locally

``` bash
npm run storybook
```

Storybook is typically available at:

``` text
http://localhost:6006
```

------------------------------------------------------------------------

## Build Storybook

``` bash
npm run build-storybook
```

------------------------------------------------------------------------

## Development

Common commands may include:

``` bash
npm run storybook
npm run test
npm run build
npm run build-storybook
```

Check `package.json` for the authoritative scripts.

------------------------------------------------------------------------

## Testing

``` bash
npm run test
```

Tests should focus on meaningful behavior such as:

-   Rendering
-   User interaction
-   Keyboard behavior
-   Disabled behavior
-   State transitions
-   Accessibility behavior

------------------------------------------------------------------------

## Building the Library

``` bash
npm run build
```

The exact output depends on the repository configuration.

------------------------------------------------------------------------

## Using the Design System

When the package is published, applications can consume the component
library rather than rebuilding components locally.

``` tsx
import {
  Button,
  Input,
  Select
} from "PACKAGE_NAME";

function CreateProject() {
  return (
    <form>
      <Input label="Project name" required />
      <Select label="Project type" />

      <Button variant="primary" type="submit">
        Create project
      </Button>
    </form>
  );
}
```

Replace `PACKAGE_NAME` with the actual package name if the library is
published.

------------------------------------------------------------------------

## Component Development

``` text
Product Requirement
        ↓
Existing pattern?
        ↓
Existing component?
        ↓
Can existing components be composed?
        ↓
If not:
Reusable component proposal
        ↓
Design Review
        ↓
Engineering Review
        ↓
Implementation
        ↓
Storybook
        ↓
Testing
        ↓
Release
```

A component should be added because it solves a reusable product need,
not simply because a particular screen contains a new UI element.

------------------------------------------------------------------------

## Component Definition of Done

Where applicable, a production-ready design-system component should
include:

-   Figma definition
-   Design-token usage
-   React implementation
-   TypeScript API
-   Required variants and states
-   Storybook stories
-   Usage documentation
-   Accessibility behavior
-   Keyboard behavior
-   Responsive behavior
-   Tests
-   Design review
-   Engineering review

A component is not considered production-ready simply because it
visually matches Figma.

------------------------------------------------------------------------

## Figma ↔ Code Mapping

The design system aims to preserve clear terminology between design and
implementation.

``` text
FIGMA

Button
Variant = Primary
Size = Medium

          ↓

CODE
```

``` tsx
<Button variant="primary" size="md">
  Create project
</Button>
```

------------------------------------------------------------------------

## Storybook as Developer Handoff

Storybook is the primary reference for understanding the implemented
component library.

Developers can use it to answer:

-   Does this component already exist?
-   What variants are supported?
-   What states exist?
-   What props are available?
-   How does the component behave?
-   How should it be used?
-   What accessibility behavior is implemented?
-   How does it behave responsively?

Developers should reuse existing components rather than recreate
equivalent UI from Figma.

------------------------------------------------------------------------

## Component Status

  -----------------------------------------------------------------------
  Status                              Meaning
  ----------------------------------- -----------------------------------
  **Ready**                           Available for production use

  **In Progress**                     Currently being implemented

  **Needs Design Decision**           Requires additional design
                                      definition

  **Needs Engineering Review**        Implementation requires engineering
                                      review

  **Deprecated**                      Should not be used for new work
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Versioning

The project follows Semantic Versioning where applicable:

``` text
MAJOR.MINOR.PATCH
```

-   **PATCH** --- Bug fixes without intended breaking API changes.
-   **MINOR** --- Backward-compatible functionality.
-   **MAJOR** --- Breaking API changes.

------------------------------------------------------------------------

## Changelog

Significant additions, improvements, fixes, deprecations, and breaking
changes should be documented in:

``` text
CHANGELOG.md
```

------------------------------------------------------------------------

## Contributing

Before changing the design system, consider:

1.  What problem does the change solve?
2.  Is the requirement reusable?
3.  Can an existing component solve it?
4.  Does it introduce a new token?
5.  Does it affect accessibility?
6.  Does it affect responsive behavior?
7.  Does it change an existing API?
8.  Does Figma need to change?
9.  Does Storybook need to change?
10. Do tests need to change?

See `CONTRIBUTING.md` for the complete contribution workflow.

------------------------------------------------------------------------

## Design System Governance

Mosaic treats the design system as a shared product between Design and
Engineering.

### Product Design

Responsible for areas such as:

-   Design intent
-   Foundations
-   Component anatomy
-   UX behavior
-   Variants
-   States
-   Usage rules
-   Interaction patterns

### Engineering

Responsible for areas such as:

-   Production implementation
-   Component architecture
-   TypeScript APIs
-   Accessibility implementation
-   Testing
-   Packaging
-   Performance

### Shared

Design and Engineering collaborate on:

-   Tokens
-   Component APIs
-   Responsive behavior
-   Accessibility
-   Storybook documentation
-   Design-to-code consistency
-   Component evolution

------------------------------------------------------------------------

## Documentation

Detailed documentation is available through Storybook.

``` text
Introduction
├── Getting Started
├── Design Principles
├── Architecture
└── Design → Development

Foundations
├── Color
├── Typography
├── Spacing
├── Radius
├── Elevation
└── Icons

Components
├── Actions
├── Forms
├── Navigation
├── Feedback
├── Overlays
└── Data Display

Enterprise Patterns
├── Search
├── Filters
├── Bulk Actions
├── Forms
├── List → Detail
└── Create / Edit

IAM
├── Role Management
├── Permission Tree
├── Permission States
└── Create Role

Guidelines
├── Accessibility
├── Responsive Design
├── UX Writing
└── Error Handling

Development
├── Installation
├── Tokens
├── Component APIs
├── Figma Mapping
├── Contribution
├── Versioning
└── Changelog
```

------------------------------------------------------------------------

## Why This Project Exists

Enterprise product design is not only about designing individual
screens.

Complex systems require reusable rules for:

-   Information hierarchy
-   Navigation
-   Data density
-   Permissions
-   Forms
-   Tables
-   Statuses
-   Actions
-   Object relationships
-   Interaction behavior

Mosaic Design System turns those decisions into a shared implementation
language that can be used across both design and engineering.

The objective is not simply to create a UI kit.

The objective is to establish a scalable foundation for building complex
enterprise product experiences consistently.

------------------------------------------------------------------------

## Portfolio Context

This repository accompanies the **Mosaic Product Design Case Study**.

The case study focuses on the product and UX decisions behind the
system, while this repository demonstrates how those decisions can be
translated into a developer-ready design-system implementation.

**Case Study:** [View Mosaic Case Study →](CASE_STUDY_URL)

**Storybook:** [Explore the Design System →](STORYBOOK_URL)

------------------------------------------------------------------------

## License

Add the appropriate license for this repository before distributing or
reusing the code.

If any part of Mosaic originates from client, employer, proprietary, or
NDA-protected work, confirm that the relevant code, assets, naming, and
product information are permitted for public distribution before
assigning an open-source license.

------------------------------------------------------------------------

## Author

**Galal Helany**\
Senior Product Designer

Product Design · Enterprise UX · Design Systems · UX Strategy ·
Design-to-Code

**Portfolio:** https://galalhelany.com
