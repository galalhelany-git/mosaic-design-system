import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Sidebar, SidebarItem } from './Sidebar';
const Icon = () => (
  <svg fill="none" viewBox="0 0 24 24">
    <path
      d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const Example = ({ initial = false, pinned = false }: { initial?: boolean; pinned?: boolean }) => {
  const [collapsed, setCollapsed] = useState(initial);
  return (
    <Sidebar
      collapsed={collapsed}
      header={<strong>{collapsed ? 'M' : 'Mosaic'}</strong>}
      onCollapsedChange={setCollapsed}
      pinned={pinned}
    >
      <SidebarItem
        active
        collapsed={collapsed}
        href="#dashboard"
        icon={<Icon />}
        label="Dashboard"
      />
      <SidebarItem
        badge={<Badge>4</Badge>}
        collapsed={collapsed}
        href="#projects"
        icon={<Icon />}
        label="Projects"
      />
      <SidebarItem collapsed={collapsed} icon={<Icon />} label="Settings" />
    </Sidebar>
  );
};

type SidebarMode = 'collapsed' | 'expanded' | 'pinned';

const StateExplorer = () => {
  const [mode, setMode] = useState<SidebarMode>('expanded');
  const collapsed = mode === 'collapsed';
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'auto 1fr' }}>
      <Sidebar
        collapsed={collapsed}
        header={<strong>{collapsed ? 'M' : 'Mosaic'}</strong>}
        onCollapsedChange={(next) => setMode(next ? 'collapsed' : 'expanded')}
        pinned={mode === 'pinned'}
      >
        <SidebarItem active collapsed={collapsed} icon={<Icon />} label="Dashboard" />
        <SidebarItem collapsed={collapsed} icon={<Icon />} label="Projects" />
        <SidebarItem collapsed={collapsed} icon={<Icon />} label="Settings" />
      </Sidebar>
      <section style={{ padding: 24 }}>
        <h2>Sidebar state: {mode}</h2>
        <p>
          Expanded and collapsed are controlled visibility states. Pinned uses the implemented
          visual modifier while remaining expanded; persistence belongs to the host application.
        </p>
        <div className="story-row" role="group" aria-label="Sidebar state">
          {(['expanded', 'collapsed', 'pinned'] as const).map((nextMode) => (
            <button key={nextMode} onClick={() => setMode(nextMode)} type="button">
              {nextMode}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
const meta = {
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          'A semantic aside/navigation shell with anchor or button items, current/pressed states, optional badges, and a controlled expanded/collapsed state.',
      },
    },
    layout: 'fullscreen',
  },
  title: 'Mosaic Design System/Components/Navigation/Sidebar',
} satisfies Meta<typeof Sidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Expanded: Story = { render: () => <Example /> };
export const Collapsed: Story = { render: () => <Example initial /> };
export const Pinned: Story = { render: () => <Example pinned /> };
export const StateTransitions: Story = { render: () => <StateExplorer /> };
export const RTL: Story = { globals: { direction: 'rtl' }, render: () => <Example /> };
