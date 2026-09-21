import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Button,
  ButtonGroup,
  Checkbox,
  Input,
  Pagination,
  SearchField,
  Select,
  StatusBadge,
  Textarea,
} from '@mosaic-ds/react';

import { Callout, CardGrid, DocCard, DocPage, DocSection, Status } from './Documentation';

const PatternHeader = ({ children, title }: { children: ReactNode; title: string }) => (
  <DocPage description={children} eyebrow="Enterprise pattern" title={title}>
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> This example composes existing components for documentation. It is
      not an exported production component or a finalized product contract.
    </Callout>
  </DocPage>
);

const SearchPattern = () => (
  <DocPage
    description="Pair a clearly named search field with result context, stable filtering, and pagination."
    eyebrow="Enterprise pattern"
    title="Search"
  >
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> SearchField and Pagination are implemented; the results workflow is
      application-owned.
    </Callout>
    <div className="docs-demo">
      <div className="docs-toolbar">
        <SearchField aria-label="Search fictional employees" placeholder="Search employees" />
        <StatusBadge status="active">24 results</StatusBadge>
      </div>
      <p>Results for the fictional Mosaic Northwind tenant would appear here.</p>
      <Pagination currentPage={1} onPageChange={() => undefined} totalPages={4} />
    </div>
    <DocSection title="Guidance">
      <ul>
        <li>Keep the query when users open and return from a result.</li>
        <li>Announce updated result counts after asynchronous searches.</li>
        <li>Do not use placeholder text as the only accessible name.</li>
      </ul>
    </DocSection>
  </DocPage>
);

const FiltersPattern = () => (
  <DocPage
    description="Use a small set of high-value filters and make the applied state easy to review and clear."
    eyebrow="Enterprise pattern"
    title="Filters"
  >
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> The repository has form primitives, but no exported filter-bar
      component.
    </Callout>
    <div className="docs-demo docs-form-grid">
      <Select label="Status" defaultValue="all">
        <option value="all">All statuses</option>
        <option value="active">Active</option>
      </Select>
      <Select label="Department" defaultValue="all">
        <option value="all">All departments</option>
        <option value="finance">Finance</option>
      </Select>
      <Checkbox label="Include archived records" />
    </div>
    <DocSection title="Guidance">
      <ul>
        <li>Represent applied filters in the URL when the product supports shareable views.</li>
        <li>Provide a clear-all action when more than one filter can be active.</li>
        <li>Preserve focus and announce result changes.</li>
      </ul>
    </DocSection>
  </DocPage>
);

const BulkActionsPattern = () => (
  <DocPage
    description="Reveal actions after selection, keep selection count visible, and protect destructive operations."
    eyebrow="Enterprise pattern"
    title="Bulk actions"
  >
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> ButtonGroup and Checkbox are implemented; selection orchestration is
      application-owned.
    </Callout>
    <div className="docs-demo">
      <Checkbox label="Select all 12 fictional invoices" />
      <div className="docs-toolbar">
        <strong>3 invoices selected</strong>
        <ButtonGroup label="Bulk invoice actions">
          <Button>Export</Button>
          <Button variant="secondary">Assign</Button>
          <Button variant="tertiary">Delete</Button>
        </ButtonGroup>
      </div>
    </div>
    <DocSection title="Guidance">
      <ul>
        <li>Scope “select all” clearly to the current page or entire result set.</li>
        <li>Require confirmation for irreversible operations.</li>
        <li>Report partial failures per item rather than hiding them in a single toast.</li>
      </ul>
    </DocSection>
  </DocPage>
);

const HeaderPattern = ({ detail = false }: { detail?: boolean }) => (
  <DocPage
    description={
      detail
        ? 'Orient users within a record and group the most important record actions.'
        : 'Give every page a stable title, context, and primary action.'
    }
    eyebrow="Enterprise pattern"
    title={detail ? 'Detail header' : 'Page header'}
  >
    <Callout title="Needs engineering review" tone="caution">
      <Status>Needs Engineering Review</Status> Figma includes a .Page Header helper, but the React
      package does not export a PageHeader or DetailHeader.
    </Callout>
    <div className="docs-demo">
      <small>{detail ? 'Employees / EMP-0042' : 'Human resources'}</small>
      <div className="docs-toolbar">
        <div>
          <h2>{detail ? 'Amina Rahal' : 'Employees'}</h2>
          <p>
            {detail
              ? 'Fictional employee record'
              : 'Manage people and access across the organization.'}
          </p>
        </div>
        <Button>{detail ? 'Edit employee' : 'Create employee'}</Button>
      </div>
    </div>
  </DocPage>
);

const FormLayoutPattern = () => (
  <DocPage
    description="Group related fields, keep reading order predictable, and place validation next to the source."
    eyebrow="Enterprise pattern"
    title="Form layout"
  >
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> This layout uses production form primitives but is not an exported
      Form component.
    </Callout>
    <div className="docs-demo">
      <div className="docs-form-grid">
        <Input label="Role name" placeholder="Finance approver" />
        <Select label="Scope" defaultValue="organization">
          <option value="organization">Organization</option>
          <option value="department">Department</option>
        </Select>
      </div>
      <Textarea label="Description" placeholder="Describe the responsibilities" />
      <div>
        <Button>Save draft</Button>
      </div>
    </div>
    <DocSection title="Guidance">
      <ul>
        <li>Use one visible label per field and connect help and error text programmatically.</li>
        <li>Keep DOM order aligned with visual order.</li>
        <li>Do not disable submission when doing so hides which fields need correction.</li>
      </ul>
    </DocSection>
  </DocPage>
);

const ListToDetailPattern = () => (
  <PatternHeader title="List to detail">
    Move from a searchable result set to one record without losing the user’s place.
  </PatternHeader>
);

const CreateEditPattern = () => (
  <DocPage
    description="Use the same information architecture for create and edit while making mode, save behavior, and unsaved changes explicit."
    eyebrow="Enterprise pattern"
    title="Create and edit flows"
  >
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> No exported workflow shell exists.
    </Callout>
    <CardGrid>
      <DocCard title="1. Orient">
        <p>Use an explicit Create or Edit title and preserve the parent context.</p>
      </DocCard>
      <DocCard title="2. Enter">
        <p>Group related fields and expose required, optional, and read-only states.</p>
      </DocCard>
      <DocCard title="3. Validate">
        <p>Show a summary for long forms and focus the first invalid control.</p>
      </DocCard>
      <DocCard title="4. Resolve">
        <p>Confirm success, protect unsaved changes, and return to a predictable destination.</p>
      </DocCard>
    </CardGrid>
  </DocPage>
);

const StatePattern = ({
  description,
  guidance,
  title,
}: {
  description: string;
  guidance: string[];
  title: string;
}) => (
  <DocPage description={description} eyebrow="Enterprise pattern" title={title}>
    <Callout title="Composition status" tone="caution">
      <Status>Planned</Status> The React package does not export a dedicated pattern component for
      this state.
    </Callout>
    <DocSection title="Guidance">
      <ul>
        {guidance.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </DocSection>
  </DocPage>
);

const meta = {
  title: 'Mosaic Design System/Enterprise Patterns',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = { render: () => <SearchPattern /> };
export const Filters: Story = { render: () => <FiltersPattern /> };
export const BulkActions: Story = { render: () => <BulkActionsPattern /> };
export const PageHeader: Story = { render: () => <HeaderPattern /> };
export const DetailHeader: Story = { render: () => <HeaderPattern detail /> };
export const FormLayout: Story = { render: () => <FormLayoutPattern /> };
export const ListToDetail: Story = { render: () => <ListToDetailPattern /> };
export const CreateAndEdit: Story = { render: () => <CreateEditPattern /> };
export const EmptyStates: Story = {
  render: () => (
    <StatePattern
      description="Explain why content is absent and provide the most useful next step without presenting normal emptiness as an error."
      guidance={[
        'Differentiate first-use, filtered, permission-limited, and genuinely empty results.',
        'Keep the primary action specific to the user’s current context.',
        'Avoid decorative illustration when it competes with task guidance.',
      ]}
      title="Empty states"
    />
  ),
};
export const LoadingStates: Story = {
  render: () => (
    <StatePattern
      description="Preserve layout, describe long-running work, and prevent duplicate operations while data is unavailable."
      guidance={[
        'Use Progress when determinate or indeterminate progress has meaningful scope.',
        'Keep existing content visible during refresh when it remains valid.',
        'Respect reduced-motion preferences and provide text for extended operations.',
      ]}
      title="Loading states"
    />
  ),
};
export const SystemErrors: Story = {
  render: () => (
    <StatePattern
      description="Make system failures persistent enough to diagnose and recover from."
      guidance={[
        'State whether the user’s input or prior data was preserved.',
        'Offer retry only when it is safe and likely to help.',
        'Provide a support reference without exposing stack traces or sensitive infrastructure data.',
      ]}
      title="System errors"
    />
  ),
};
export const DestructiveActions: Story = {
  render: () => (
    <StatePattern
      description="Use explicit object names, impact summaries, and confirmation proportional to reversibility."
      guidance={[
        'Separate reversible removal from permanent deletion in language and behavior.',
        'Move focus into confirmations and restore it when users cancel.',
        'The current Button API has no approved destructive variant; do not simulate one with an undocumented style.',
      ]}
      title="Destructive actions"
    />
  ),
};
