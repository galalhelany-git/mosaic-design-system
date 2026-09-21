import type { Meta, StoryObj } from '@storybook/react-vite';

import { spacingTokens } from '@mosaic-ds/tokens';

const Spacing = () => (
  <main>
    <h1>Spacing</h1>
    {Object.entries(spacingTokens).map(([name, value]) => (
      <div className="spacing-row" key={name}>
        <div>
          <code>{name}</code>
          <br />
          <small>
            {value}px · var(--mosaic-{name.replaceAll('.', '-')})
          </small>
        </div>
        <div className="spacing-block" style={{ inlineSize: value }} title={`${value}px`} />
      </div>
    ))}
  </main>
);

const meta = {
  component: Spacing,
  title: 'Mosaic Design System/Foundations/Spacing',
} satisfies Meta<typeof Spacing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
