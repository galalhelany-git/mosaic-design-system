import type { Decorator, Preview } from '@storybook/react-vite';

import '@mosaic-ds/react/styles.css';
import '../stories/storybook.css';

const withDirection: Decorator = (Story, context) => {
  const direction = context.globals.direction === 'rtl' ? 'rtl' : 'ltr';

  return (
    <div data-mosaic-root dir={direction} style={{ minHeight: '100%', padding: 24 }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withDirection],
  globalTypes: {
    direction: {
      description: 'Document direction',
      toolbar: {
        icon: 'globe',
        items: [
          { title: 'LTR', value: 'ltr' },
          { title: 'RTL', value: 'rtl' },
        ],
      },
    },
  },
  initialGlobals: {
    direction: 'ltr',
  },
  parameters: {
    a11y: {
      test: 'error',
    },
    controls: {
      expanded: true,
    },
    options: {
      storySort: {
        order: [
          'Mosaic Design System',
          [
            'Introduction',
            ['Getting Started', 'Design Principles', 'Architecture', 'Design to Development'],
            'Foundations',
            ['Color', 'Typography', 'Spacing', 'Radius', 'Elevation', 'Icons', 'Layout'],
            'Components',
            [
              'Overview',
              'Status and Ownership',
              'Actions',
              'Forms',
              'Navigation',
              'Feedback',
              'Overlays',
              'Data Display',
            ],
            'Enterprise Patterns',
            'IAM',
            'Guidelines',
            'Development',
          ],
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
