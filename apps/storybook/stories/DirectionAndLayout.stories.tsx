import type { Meta, StoryObj } from '@storybook/react-vite';

const DirectionAndLayoutGuidance = () => (
  <main style={{ maxWidth: 800 }}>
    <h1>RTL and responsive behavior</h1>
    <p>
      Set <code>dir</code> on the Mosaic root. Logical CSS properties, mirrored directional icons,
      and RTL-aware horizontal keyboard movement are built in.
    </p>
    <h2>Intrinsic layout</h2>
    <p>
      Figma does not define breakpoint values, so Mosaic does not guess them. Components cap their
      width to the container, wrap safe content, and use local scrolling for navigation or calendar
      anatomy that cannot reflow without a design decision.
    </p>
    <h2>Application responsibilities</h2>
    <ul>
      <li>Own page grids, breakpoints, safe areas, and navigation transformations.</li>
      <li>Test LTR and RTL with long localized strings and bidirectional numbers/dates.</li>
      <li>Keep DOM, reading, visual, and keyboard order aligned.</li>
      <li>Restore focus when drawers or application-owned overlays close.</li>
    </ul>
    <p>Use the Storybook direction toolbar to inspect every component in LTR and RTL.</p>
  </main>
);

const meta = {
  component: DirectionAndLayoutGuidance,
  parameters: { layout: 'centered' },
  title: 'Mosaic Design System/Guidelines/RTL and Responsive',
} satisfies Meta<typeof DirectionAndLayoutGuidance>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
