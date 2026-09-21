import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { typographyTokens } from '@mosaic-ds/tokens';

const letterSpacingToCss = (value: string): string =>
  value.endsWith('%') ? `${Number.parseFloat(value) / 100}em` : value;

const Typography = () => (
  <main>
    <h1>Typography</h1>
    <p>Poppins is used by most audited styles; the Figma Input style uses Inter.</p>
    {Object.entries(typographyTokens).map(([name, token]) => {
      const style: CSSProperties = {
        fontFamily: token.fontFamily,
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        letterSpacing: letterSpacingToCss(token.letterSpacing),
        lineHeight: token.lineHeight === 'normal' ? 'normal' : `${token.lineHeight}px`,
      };

      return (
        <section
          key={name}
          style={{
            borderBlockEnd: '1px solid var(--mosaic-color-neutral-border)',
            paddingBlock: 'var(--mosaic-spacing-16)',
          }}
        >
          <div className="docs-toolbar">
            <code>{name}</code>
            <small>
              {token.fontFamily} · {token.fontStyle} · {token.fontSize}px/{token.lineHeight} ·{' '}
              {token.letterSpacing}
            </small>
          </div>
          <div style={style}>Mosaic is a specialized model within ARC ERP</div>
          {token.description ? (
            <small>{token.description}</small>
          ) : (
            <small>Description pending design review</small>
          )}
        </section>
      );
    })}
  </main>
);

const meta = {
  component: Typography,
  title: 'Mosaic Design System/Foundations/Typography',
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
