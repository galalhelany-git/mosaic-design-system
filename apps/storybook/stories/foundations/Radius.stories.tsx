import type { Meta, StoryObj } from '@storybook/react-vite';

import { measurementTokens } from '@mosaic-ds/tokens';

const Radius = () => (
  <main>
    <h1>Radius and measurements</h1>
    <p>
      Figma exposes one abstract 8px measurement and no dedicated radius scale. Its use as a
      canonical radius remains a design decision.
    </p>
    <div className="radius-sample">
      <code>measurement.abstract.8 = {measurementTokens['measurement.abstract.8']}px</code>
    </div>
  </main>
);

const meta = {
  component: Radius,
  title: 'Mosaic Design System/Foundations/Radius',
} satisfies Meta<typeof Radius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
