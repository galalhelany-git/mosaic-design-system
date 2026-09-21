import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, Checkbox, Input, RoleBadgeCell, Select, StatusBadge } from '@mosaic-ds/react';

import { Callout, CardGrid, DocCard, DocPage, DocSection, Status } from './Documentation';

const PlannedNotice = () => (
  <Callout title="IAM documentation status" tone="caution">
    <Status>Planned</Status> These examples use fictional Mosaic Northwind data. The repository does
    not export role-management, permission-tree, or authorization-policy components.
  </Callout>
);

const RoleManagementPage = () => (
  <DocPage
    description="Make role scope, membership, status, and high-risk actions visible before users change access."
    eyebrow="Identity and access management"
    title="Role management"
  >
    <PlannedNotice />
    <div className="docs-table-wrap">
      <table className="docs-table">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Scope</th>
            <th scope="col">Members</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <RoleBadgeCell role="organization-admin" /> Finance approver
            </th>
            <td>Northwind / Finance</td>
            <td>8</td>
            <td>
              <StatusBadge status="active" />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <RoleBadgeCell role="user" /> Inventory viewer
            </th>
            <td>Northwind / Operations</td>
            <td>34</td>
            <td>
              <StatusBadge status="pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <DocSection title="Guidance">
      <ul>
        <li>Separate immutable system roles from organization-defined roles.</li>
        <li>Show inherited scope and member impact before destructive changes.</li>
        <li>Record changes in a product-owned audit log.</li>
      </ul>
    </DocSection>
  </DocPage>
);

const PermissionTreePage = () => (
  <DocPage
    description="Represent hierarchy without hiding inherited, partial, disabled, or dependent permission states."
    eyebrow="Identity and access management"
    title="Permission tree"
  >
    <PlannedNotice />
    <div className="docs-demo">
      <Checkbox defaultChecked indeterminate label="Finance" />
      <div style={{ display: 'grid', gap: 12, paddingInlineStart: 36 }}>
        <Checkbox defaultChecked label="View invoices" />
        <Checkbox defaultChecked label="Approve invoices" />
        <Checkbox label="Delete invoices" />
      </div>
    </div>
    <DocSection title="Accessibility contract">
      <ul>
        <li>
          Use a real tree only when hierarchical keyboard behavior is required and implemented.
        </li>
        <li>Otherwise, use grouped checkboxes with headings and fieldsets.</li>
        <li>
          Expose mixed state programmatically and never communicate inheritance by color alone.
        </li>
      </ul>
    </DocSection>
  </DocPage>
);

const PermissionStatesPage = () => (
  <DocPage
    description="A state vocabulary for permission discussions. Product policy and backend authorization remain the source of truth."
    eyebrow="Identity and access management"
    title="Permission states"
  >
    <PlannedNotice />
    <CardGrid>
      <DocCard title="Granted">
        <p>Explicitly available within the current scope.</p>
      </DocCard>
      <DocCard title="Not granted">
        <p>Available to assign but currently absent.</p>
      </DocCard>
      <DocCard title="Inherited">
        <p>Granted by a parent role or wider scope; show its source.</p>
      </DocCard>
      <DocCard title="Mixed">
        <p>Child permissions do not share one state.</p>
      </DocCard>
      <DocCard title="Unavailable">
        <p>Cannot be changed because of policy, licensing, or dependency.</p>
      </DocCard>
      <DocCard title="Conflict">
        <p>Needs an explicit product resolution rule; do not silently choose precedence.</p>
      </DocCard>
    </CardGrid>
  </DocPage>
);

const CreateRoleFlowPage = () => (
  <DocPage
    description="A proposed sequence for creating a scoped role and reviewing its impact before assignment."
    eyebrow="Identity and access management"
    title="Create role flow"
  >
    <PlannedNotice />
    <ol className="docs-step-list">
      <li>
        <div>
          <strong>Define</strong>
          <p>Name the role, describe its purpose, and choose a scope.</p>
        </div>
      </li>
      <li>
        <div>
          <strong>Configure</strong>
          <p>Select permissions while showing dependencies and inherited access.</p>
        </div>
      </li>
      <li>
        <div>
          <strong>Review</strong>
          <p>Summarize high-risk permissions, scope, and conflicts.</p>
        </div>
      </li>
      <li>
        <div>
          <strong>Assign</strong>
          <p>Add members only after the role definition is saved and auditable.</p>
        </div>
      </li>
    </ol>
    <div className="docs-demo">
      <div className="docs-form-grid">
        <Input label="Role name" placeholder="Finance approver" />
        <Select label="Scope" defaultValue="finance">
          <option value="finance">Finance department</option>
        </Select>
      </div>
      <Button>Continue to permissions</Button>
    </div>
  </DocPage>
);

const meta = {
  title: 'Mosaic Design System/IAM',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const RoleManagement: Story = { render: () => <RoleManagementPage /> };
export const PermissionTree: Story = { render: () => <PermissionTreePage /> };
export const PermissionStates: Story = { render: () => <PermissionStatesPage /> };
export const CreateRoleFlow: Story = { render: () => <CreateRoleFlowPage /> };
