import type { Meta, StoryObj } from '@storybook/react-vite';

const cardStyle = {
  border: '1px solid var(--mosaic-color-neutral-border)',
  borderRadius: 8,
  padding: 20,
} as const;

const VisualVerification = () => (
  <main style={{ display: 'grid', gap: 24, maxWidth: 920 }}>
    <div>
      <p style={{ color: 'var(--mosaic-color-secondary-700)', fontWeight: 600 }}>Phase 7</p>
      <h1>Testing and visual verification</h1>
      <p>
        The implemented library has been compared with all 36 component groups in the Mosaic Figma
        source. Desktop, 320px, RTL, and representative interactive states were captured in the
        repository verification bundle.
      </p>
    </div>

    <section
      style={{
        display: 'grid',
        gap: 12,
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      }}
    >
      <div style={cardStyle}>
        <strong>36 / 36</strong>
        <div>implemented groups reviewed</div>
      </div>
      <div style={cardStyle}>
        <strong>0 open</strong>
        <div>critical discrepancies</div>
      </div>
      <div style={cardStyle}>
        <strong>44 tests</strong>
        <div>automated behavior checks</div>
      </div>
    </section>

    <section>
      <h2>Resolved during verification</h2>
      <ul>
        <li>DatePicker and TimePicker no longer collapse to minimum-content width.</li>
        <li>Snackbar status colors, 48px icon tile, and dismiss affordance match Figma.</li>
        <li>Pagination direction controls no longer add icons absent from Figma.</li>
      </ul>
    </section>

    <section>
      <h2>Known source decisions</h2>
      <p>
        Contrast failures, native Select scope, picker composition, navigation breakpoints, overlay
        collision behavior, notification lifecycle, and the canonical font strategy remain explicit
        design or product decisions. See the Phase 7 report and DESIGN-DECISIONS.md; these are not
        silently treated as pixel-perfect approval.
      </p>
    </section>
  </main>
);

const meta = {
  component: VisualVerification,
  parameters: { layout: 'centered' },
  title: 'Mosaic Design System/Guidelines/Visual Verification',
} satisfies Meta<typeof VisualVerification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Phase7Summary: Story = {};
