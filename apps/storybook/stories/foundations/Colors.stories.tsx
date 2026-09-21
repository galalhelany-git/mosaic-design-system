import type { Meta, StoryObj } from '@storybook/react-vite';

import { colorTokens } from '@mosaic-ds/tokens';

const Colors = () => (
  <main>
    <h1>Color</h1>
    <p>
      Audited primitive values from Figma. Every swatch is rendered from <code>colorTokens</code>;
      semantic role assignment is pending design approval.
    </p>
    <div className="foundation-grid">
      {Object.entries(colorTokens).map(([name, value]) => (
        <article className="foundation-card" key={name}>
          <div className="foundation-card__sample" style={{ background: value }} />
          <div className="foundation-card__body">
            <strong>{name}</strong>
            <code>{value}</code>
            <code>var(--mosaic-{name.replaceAll('.', '-')})</code>
          </div>
        </article>
      ))}
    </div>
  </main>
);

const meta = {
  component: Colors,
  parameters: { layout: 'fullscreen' },
  title: 'Mosaic Design System/Foundations/Color',
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
