import type { Meta, StoryObj } from '@storybook/react-vite';

import { elevationTokens } from '@mosaic-ds/tokens';

const Elevation = () => (
  <main>
    <h1>Elevation</h1>
    <div className="foundation-grid">
      {Object.entries(elevationTokens).map(([name, layers]) => (
        <article
          className="foundation-card__body"
          key={name}
          style={{
            background: 'var(--mosaic-color-neutral-background-white)',
            borderRadius: 'var(--mosaic-measurement-abstract-8)',
            boxShadow: `var(--mosaic-elevation-${name})`,
            minHeight: 96,
          }}
        >
          <strong>{name}</strong>
          <code>var(--mosaic-elevation-{name})</code>
          <small>
            {layers
              .map(
                (layer) =>
                  `${layer.type}: ${layer.offsetX}px ${layer.offsetY}px ${layer.blur}px ${layer.spread}px ${layer.color}`,
              )
              .join(' · ')}
          </small>
        </article>
      ))}
    </div>
  </main>
);

const meta = {
  component: Elevation,
  title: 'Mosaic Design System/Foundations/Elevation',
} satisfies Meta<typeof Elevation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
