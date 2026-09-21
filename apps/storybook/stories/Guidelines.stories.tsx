import type { Meta, StoryObj } from '@storybook/react-vite';

import { Callout, CardGrid, DocCard, DocPage, DocSection } from './Documentation';

const UXWritingPage = () => (
  <DocPage
    description="Write compact, specific interface copy that helps people predict outcomes and recover from problems."
    eyebrow="Guidelines"
    title="UX writing"
  >
    <CardGrid>
      <DocCard title="Lead with the task">
        <p>Use action-oriented titles and labels that match the user’s goal.</p>
      </DocCard>
      <DocCard title="Name the object">
        <p>Prefer “Delete invoice” over a vague “Delete” when context can be lost.</p>
      </DocCard>
      <DocCard title="Use plain language">
        <p>Explain domain terms when they are not familiar to the intended audience.</p>
      </DocCard>
      <DocCard title="Design for translation">
        <p>Avoid string concatenation and allow labels to expand without truncating meaning.</p>
      </DocCard>
    </CardGrid>
    <DocSection title="Action labels">
      <p>
        Use verbs for buttons. Reserve “Submit” for domains where the submission itself is
        meaningful. Match a destructive confirmation button to the action named in the dialog title.
      </p>
    </DocSection>
    <Callout title="Localization">
      Component-owned labels such as next page, dismiss notification, expand, and collapse are part
      of the localization contract, even when adjacent product copy is visible.
    </Callout>
  </DocPage>
);

const ErrorHandlingPage = () => (
  <DocPage
    description="Help users understand what happened, what was preserved, and what they can do next."
    eyebrow="Guidelines"
    title="Error handling"
  >
    <DocSection title="Error anatomy">
      <ol className="docs-step-list">
        <li>
          <div>
            <strong>Identify</strong>
            <p>Name the action or data that failed.</p>
          </div>
        </li>
        <li>
          <div>
            <strong>Explain</strong>
            <p>Use a safe, specific reason when one is known.</p>
          </div>
        </li>
        <li>
          <div>
            <strong>Recover</strong>
            <p>Offer the next useful action and preserve valid input.</p>
          </div>
        </li>
      </ol>
    </DocSection>
    <CardGrid>
      <DocCard title="Field error">
        <p>
          Associate the message with its control, set invalid state, and focus the first invalid
          field after submission.
        </p>
      </DocCard>
      <DocCard title="Page error">
        <p>Keep navigation available and explain whether retrying is safe.</p>
      </DocCard>
      <DocCard title="Partial failure">
        <p>Report which items succeeded and which need attention.</p>
      </DocCard>
      <DocCard title="Permission error">
        <p>State that access is unavailable without exposing sensitive policy details.</p>
      </DocCard>
    </CardGrid>
    <Callout title="Do not rely on toasts alone" tone="caution">
      Persistent or blocking errors need persistent, discoverable treatment. Use alerts deliberately
      and avoid duplicate announcements.
    </Callout>
  </DocPage>
);

const meta = {
  title: 'Mosaic Design System/Guidelines',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const UXWriting: Story = { render: () => <UXWritingPage /> };
export const ErrorHandling: Story = { render: () => <ErrorHandlingPage /> };
