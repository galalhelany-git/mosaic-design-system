import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { gridTokens } from '@mosaic-ds/tokens';

const Grid = () => (
  <main>
    <h1>Layout</h1>
    <p>
      All nine audited Figma grid styles are preserved. Draft styles remain clearly named until
      their intended product usage is confirmed. These are Figma grid definitions, not approved CSS
      breakpoints.
    </p>
    <div className="grid-list">
      {Object.entries(gridTokens).map(([name, layers]) => (
        <section className="grid-example" key={name}>
          <div>
            <strong>{name}</strong>
            <div className="grid-example__metadata">
              {layers.map((layer, index) => (
                <code key={`${name}-${index}`}>
                  {layer.columns} col / {layer.gutter}px gutter / {layer.alignment}
                </code>
              ))}
            </div>
          </div>
          <div
            aria-label={`${name} primary grid layer`}
            className="grid-example__canvas"
            style={
              {
                '--grid-columns': layers[0].columns,
                '--grid-gutter': `${layers[0].gutter}px`,
              } as CSSProperties
            }
          >
            {Array.from({ length: layers[0].columns }, (_, index) => (
              <span key={index} />
            ))}
          </div>
        </section>
      ))}
    </div>
  </main>
);

const meta = {
  component: Grid,
  title: 'Mosaic Design System/Foundations/Layout',
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
