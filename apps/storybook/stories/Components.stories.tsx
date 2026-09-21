import type { Meta, StoryObj } from '@storybook/react-vite';

import { Callout, CardGrid, DocCard, DocPage, DocSection, StatusTable } from './Documentation';

const componentRows = [
  { name: 'IconButton', status: 'Ready', detail: 'Typed icon slot with accessible naming.' },
  {
    name: 'Checkbox',
    status: 'Ready',
    detail: 'Native checkbox semantics and indeterminate support.',
  },
  { name: 'Radio', status: 'Ready', detail: 'Native grouped selection control.' },
  {
    name: 'SearchField',
    status: 'Ready',
    detail: 'Native search input with a required accessible name.',
  },
  {
    name: 'Progress',
    status: 'Ready',
    detail: 'Determinate and indeterminate progress semantics.',
  },
  { name: 'ButtonGroup', status: 'Implemented', detail: 'Horizontal or vertical action grouping.' },
  { name: 'Accordion', status: 'Implemented', detail: 'Controlled and uncontrolled disclosure.' },
  { name: 'Breadcrumb', status: 'Implemented', detail: 'Semantic breadcrumb navigation.' },
  { name: 'Tabs', status: 'Implemented', detail: 'Horizontal and vertical keyboard navigation.' },
  {
    name: 'Pagination',
    status: 'Implemented',
    detail: 'Page navigation without unapproved chevrons.',
  },
  {
    name: 'RoleBadge / RoleBadgeCell',
    status: 'Implemented',
    detail: 'Figma-exported role artwork and labels.',
  },
  {
    name: 'Button',
    status: 'Needs Design Decision',
    detail: 'Inherited contrast exception is tracked.',
  },
  {
    name: 'Input / Textarea / Switch / Select',
    status: 'Needs Design Decision',
    detail: 'Implemented APIs with inherited contrast or custom-control decisions open.',
  },
  {
    name: 'Calendar / DatePicker / TimePicker',
    status: 'Needs Design Decision',
    detail: 'Date, locale, timezone, and product contract decisions remain.',
  },
  {
    name: 'Sidebar / TopNavigation / DashboardToggle',
    status: 'Needs Design Decision',
    detail: 'Responsive transformation is owned by the host application.',
  },
  {
    name: 'Toast / Snackbar / Dialog / Tooltip',
    status: 'Needs Design Decision',
    detail: 'Lifecycle, overlay, or visual policy decisions remain.',
  },
  {
    name: 'Badge / StatusBadge / Avatar',
    status: 'Needs Design Decision',
    detail: 'Inherited visual contrast issues are recorded.',
  },
  {
    name: 'FileUploader',
    status: 'Needs Design Decision',
    detail: 'Upload transport and product validation remain application concerns.',
  },
] as const;

const OverviewPage = () => (
  <DocPage
    description="Thirty-six implemented component groups, organized by product purpose. Each component story is the source of truth for its typed API and supported states."
    eyebrow="Components"
    title="Component library"
  >
    <CardGrid>
      <DocCard title="Actions">
        <p>Button, IconButton, CloseButton, and ButtonGroup.</p>
      </DocCard>
      <DocCard title="Forms">
        <p>
          Input, Select, Checkbox, Radio, Switch, Textarea, SearchField, date/time controls, and
          FileUploader.
        </p>
      </DocCard>
      <DocCard title="Navigation">
        <p>Breadcrumb, Tabs, Pagination, DashboardToggle, TopNavigation, and Sidebar.</p>
      </DocCard>
      <DocCard title="Feedback">
        <p>Badge, StatusBadge, Progress, Tooltip, Toast, and Snackbar.</p>
      </DocCard>
      <DocCard title="Overlays">
        <p>Dialog with header and footer composition.</p>
      </DocCard>
      <DocCard title="Data display">
        <p>Accordion, Avatar, Divider, RoleBadge, and RoleBadgeCell.</p>
      </DocCard>
    </CardGrid>
    <DocSection title="How to read component documentation">
      <ul>
        <li>
          <strong>Canvas</strong> is for interactive state and direction testing.
        </li>
        <li>
          <strong>Docs</strong> exposes the real TypeScript API through Autodocs and controls.
        </li>
        <li>
          <strong>Story names</strong> identify variants, sizes, states, RTL, and responsive
          examples that actually exist.
        </li>
        <li>Status reflects implementation maturity, not whether the component renders.</li>
      </ul>
    </DocSection>
    <Callout title="No hidden catalog">
      DataTable, Drawer, PageHeader, DetailHeader, filter bars, permission trees, and page workflows
      are not exported production components. They appear only as clearly labeled composition
      guidance.
    </Callout>
  </DocPage>
);

const StatusPage = () => (
  <DocPage
    description="A compact view of the audited implementation status. Open decisions remain visible instead of being presented as finished design-system policy."
    eyebrow="Components"
    title="Status and ownership"
  >
    <StatusTable rows={componentRows.map((row) => ({ ...row }))} />
    <DocSection title="Review ownership">
      <p>
        <strong>Product Design</strong> owns visual intent, approved variants, contrast
        replacements, and unresolved UX behavior. <strong>Engineering</strong> owns API design,
        browser behavior, dependencies, performance, and application composition.
      </p>
    </DocSection>
  </DocPage>
);

const meta = {
  title: 'Mosaic Design System/Components',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = { render: () => <OverviewPage /> };
export const StatusAndOwnership: Story = { render: () => <StatusPage /> };
