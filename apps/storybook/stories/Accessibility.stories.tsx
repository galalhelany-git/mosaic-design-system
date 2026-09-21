import type { Meta, StoryObj } from '@storybook/react-vite';

const AccessibilityGuidance = () => (
  <main style={{ maxWidth: 800 }}>
    <h1>Accessibility</h1>
    <p>
      Mosaic targets WCAG 2.2 AA implementation behavior. Automated checks are regression guards,
      not a conformance claim; releases still require keyboard, screen-reader, reflow,
      reduced-motion, and forced-colors review.
    </p>
    <h2>Consumer responsibilities</h2>
    <ul>
      <li>
        Provide meaningful visible labels, accessible names, descriptions, and error messages.
      </li>
      <li>Localize built-in action labels and test long translated content.</li>
      <li>
        Manage focus after routes, async workflows, destructive actions, and application overlays.
      </li>
      <li>Do not put essential or interactive content inside a tooltip.</li>
      <li>Choose polite status versus assertive alert announcements deliberately.</li>
    </ul>
    <h2>Release checks</h2>
    <ol>
      <li>Complete the workflow using keyboard only, including reverse tab order.</li>
      <li>Verify names, roles, states, descriptions, errors, and live announcements.</li>
      <li>Review at 200% and 400% zoom and at a 320px viewport.</li>
      <li>Test reduced motion, forced colors, LTR, and RTL.</li>
      <li>Run automated axe checks and resolve new serious or critical issues.</li>
    </ol>
    <p>
      Known inherited contrast issues and semantic ambiguities remain listed in the repository’s
      design-decision log.
    </p>
  </main>
);

const meta = {
  component: AccessibilityGuidance,
  parameters: { layout: 'centered' },
  title: 'Mosaic Design System/Guidelines/Accessibility',
} satisfies Meta<typeof AccessibilityGuidance>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
