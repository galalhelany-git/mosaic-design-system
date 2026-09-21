import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Callout,
  CardGrid,
  CodeBlock,
  DocCard,
  DocPage,
  DocSection,
  Status,
} from './Documentation';

const InstallationPage = () => (
  <DocPage
    description="Work with Mosaic from this pnpm monorepo. The packages are private and are not currently a public registry installation."
    eyebrow="Development"
    title="Installation"
  >
    <DocSection title="Prerequisites">
      <ul>
        <li>Node.js 22 or later</li>
        <li>Corepack-enabled pnpm 11.19.0</li>
      </ul>
    </DocSection>
    <CodeBlock>{`corepack enable\npnpm install\npnpm storybook`}</CodeBlock>
    <DocSection title="Use the React package">
      <CodeBlock>{`import { Button } from '@mosaic-ds/react';\nimport '@mosaic-ds/react/styles.css';`}</CodeBlock>
    </DocSection>
    <Callout title="Package status" tone="caution">
      <Status>Needs Engineering Review</Status> Both workspace packages are private at version
      0.0.0. Publishing is not documented because it is not configured.
    </Callout>
  </DocPage>
);

const TokensPage = () => (
  <DocPage
    description="Consume typed token objects in JavaScript or generated custom properties in CSS."
    eyebrow="Development"
    title="Tokens"
  >
    <CodeBlock>{`import { colorTokens, spacingTokens } from '@mosaic-ds/tokens';\nimport '@mosaic-ds/tokens/tokens.css';\n\nconst brand = colorTokens['color.primary.500'];`}</CodeBlock>
    <DocSection title="Rules">
      <ul>
        <li>Use an existing token before introducing a new literal.</li>
        <li>
          Regenerate CSS with <code>pnpm tokens:generate</code> after approved token changes.
        </li>
        <li>
          Do not invent semantic aliases: the semantic token object is intentionally empty pending
          design approval.
        </li>
      </ul>
    </DocSection>
  </DocPage>
);

const ComponentAPIsPage = () => (
  <DocPage
    description="The package root exports components and their public TypeScript types. Component Autodocs are generated from these real APIs."
    eyebrow="Development"
    title="Component APIs"
  >
    <CodeBlock>{`import { Input, type InputProps } from '@mosaic-ds/react';\n\nconst field: InputProps = {\n  label: 'Employee ID',\n  helpText: 'Use the HR record identifier',\n};`}</CodeBlock>
    <DocSection title="Contract">
      <ul>
        <li>Native HTML attributes are forwarded where the public type permits them.</li>
        <li>Controlled and uncontrolled behavior is documented per component.</li>
        <li>
          Accessible names and component-owned labels are required where the browser cannot infer
          them.
        </li>
        <li>
          Application workflows, network requests, routing, and authorization do not belong in
          primitive APIs.
        </li>
      </ul>
    </DocSection>
  </DocPage>
);

const FigmaMappingPage = () => (
  <DocPage
    description="Figma carries approved intent; code carries supported behavior. Their names and variants are mapped deliberately, not assumed to be identical."
    eyebrow="Development"
    title="Figma mapping"
  >
    <CardGrid>
      <DocCard title="Direct mapping">
        <p>Button, Input, Sidebar, and other audited components have named React counterparts.</p>
      </DocCard>
      <DocCard title="Internal anatomy">
        <p>
          Figma base layers such as tab items or calendar days may remain internal implementation
          details.
        </p>
      </DocCard>
      <DocCard title="Documentation helper">
        <p>
          Color swatches and .Page Header can document design intent without becoming package
          exports.
        </p>
      </DocCard>
      <DocCard title="Blocked">
        <p>Code Connect remains unavailable under the current Figma plan or seat.</p>
      </DocCard>
    </CardGrid>
    <Callout title="Source-of-truth rule">
      Use Storybook for supported properties and interaction behavior. Do not infer a public React
      prop from every Figma variant.
    </Callout>
  </DocPage>
);

const ContributionPage = () => (
  <DocPage
    description="Change foundations, components, and documentation as one reviewed contract."
    eyebrow="Development"
    title="Contribution"
  >
    <ol className="docs-step-list">
      <li>
        <div>
          <strong>Record uncertainty</strong>
          <p>Add unresolved intent to the decision log.</p>
        </div>
      </li>
      <li>
        <div>
          <strong>Get approval</strong>
          <p>New tokens, visual states, variants, and components need Product Design approval.</p>
        </div>
      </li>
      <li>
        <div>
          <strong>Implement fully</strong>
          <p>
            Update API, styles, stories, tests, accessibility behavior, RTL, and narrow layouts
            together.
          </p>
        </div>
      </li>
      <li>
        <div>
          <strong>Verify</strong>
          <p>
            Run typecheck, lint, tests, format checks, package builds, and the static Storybook
            build.
          </p>
        </div>
      </li>
      <li>
        <div>
          <strong>Describe impact</strong>
          <p>Add a Changeset for published-package changes.</p>
        </div>
      </li>
    </ol>
    <CodeBlock>{`pnpm typecheck\npnpm lint\npnpm test\npnpm format:check\npnpm build`}</CodeBlock>
  </DocPage>
);

const VersioningPage = () => (
  <DocPage
    description="The repository is configured for Changesets and Semantic Versioning, but the workspace packages remain private and unreleased."
    eyebrow="Development"
    title="Versioning"
  >
    <CardGrid>
      <DocCard title="Patch">
        <p>Backward-compatible fixes and documentation corrections.</p>
      </DocCard>
      <DocCard title="Minor">
        <p>Backward-compatible features, variants, or public APIs.</p>
      </DocCard>
      <DocCard title="Major">
        <p>Breaking API, behavior, token, or style changes.</p>
      </DocCard>
    </CardGrid>
    <Callout title="Deprecation policy">
      Provide a replacement path, migration note, Storybook warning, and at least one non-breaking
      release before removal.
    </Callout>
  </DocPage>
);

const ChangelogPage = () => (
  <DocPage
    description="The repository changelog records the completed implementation phases while the packages remain unreleased."
    eyebrow="Development"
    title="Changelog"
  >
    <DocSection title="Unreleased highlights">
      <ul>
        <li>Typed token pipeline and Storybook foundations.</li>
        <li>Primitive and composite React component libraries.</li>
        <li>Accessibility, keyboard, RTL, and intrinsic responsive behavior.</li>
        <li>Figma/Storybook visual verification across 36 implemented component groups.</li>
        <li>
          Structured product documentation, enterprise composition guidance, and IAM guidance.
        </li>
      </ul>
    </DocSection>
    <Callout title="Canonical record">
      The root <code>CHANGELOG.md</code> remains the version-controlled release record. This page is
      a navigable summary.
    </Callout>
  </DocPage>
);

const meta = {
  title: 'Mosaic Design System/Development',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Installation: Story = { render: () => <InstallationPage /> };
export const Tokens: Story = { render: () => <TokensPage /> };
export const ComponentAPIs: Story = { name: 'Component APIs', render: () => <ComponentAPIsPage /> };
export const FigmaMapping: Story = { render: () => <FigmaMappingPage /> };
export const Contribution: Story = { render: () => <ContributionPage /> };
export const Versioning: Story = { render: () => <VersioningPage /> };
export const Changelog: Story = { render: () => <ChangelogPage /> };
