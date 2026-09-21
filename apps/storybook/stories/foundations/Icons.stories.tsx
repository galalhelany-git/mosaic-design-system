import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import checkboxCheck from '../../../../packages/react/src/assets/checkbox-check.svg';
import checkboxMinus from '../../../../packages/react/src/assets/checkbox-minus.svg';
import checkmark from '../../../../packages/react/src/assets/checkmark.svg';
import chevronsUpDown from '../../../../packages/react/src/assets/chevrons-up-down.svg';
import loadingDot from '../../../../packages/react/src/assets/loading-dot.svg';
import loadingRing from '../../../../packages/react/src/assets/loading-ring.svg';
import roleOrganizationAdmin from '../../../../packages/react/src/assets/role-organization-admin.svg';
import roleSuperAdmin from '../../../../packages/react/src/assets/role-super-admin.svg';
import roleSystemAdmin from '../../../../packages/react/src/assets/role-system-admin.svg';
import roleUser from '../../../../packages/react/src/assets/role-user.svg';
import search from '../../../../packages/react/src/assets/search.svg';
import {
  CalendarIcon,
  ChevronIcon,
  CloseIcon,
  MoreIcon,
  UploadIcon,
} from '../../../../packages/react/src/components/internal/Icons';
import { Callout, CardGrid, DocCard, DocPage, DocSection, Status } from '../Documentation';

const svgAssets = [
  ['checkbox-check.svg', checkboxCheck],
  ['checkbox-minus.svg', checkboxMinus],
  ['checkmark.svg', checkmark],
  ['chevrons-up-down.svg', chevronsUpDown],
  ['loading-dot.svg', loadingDot],
  ['loading-ring.svg', loadingRing],
  ['search.svg', search],
  ['role-super-admin.svg', roleSuperAdmin],
  ['role-system-admin.svg', roleSystemAdmin],
  ['role-organization-admin.svg', roleOrganizationAdmin],
  ['role-user.svg', roleUser],
] as const;

const internalIcons: Array<[string, ReactNode]> = [
  ['CalendarIcon', <CalendarIcon key="calendar" />],
  ['ChevronIcon', <ChevronIcon key="chevron" />],
  ['CloseIcon', <CloseIcon key="close" />],
  ['MoreIcon', <MoreIcon key="more" />],
  ['UploadIcon', <UploadIcon key="upload" />],
];

const IconsPage = () => (
  <DocPage
    description="The icons currently shipped inside @mosaic-ds/react. They support component anatomy and are not a public general-purpose icon package."
    eyebrow="Foundations"
    title="Icons"
  >
    <Callout title="API boundary" tone="caution">
      <Status>Needs Engineering Review</Status> Internal SVG functions and asset files are
      intentionally not exported from the package root. Use component icon slots for
      product-provided icons.
    </Callout>
    <DocSection title="Internal React icons">
      <CardGrid>
        {internalIcons.map(([name, icon]) => (
          <DocCard key={name} title={name}>
            <div className="icon-gallery__sample">{icon}</div>
            <code>Internal component anatomy</code>
          </DocCard>
        ))}
      </CardGrid>
    </DocSection>
    <DocSection title="Bundled SVG assets">
      <CardGrid>
        {svgAssets.map(([name, source]) => (
          <DocCard key={name} title={name}>
            <div className="icon-gallery__sample">
              <img alt="" src={source} />
            </div>
            <code>packages/react/src/assets</code>
          </DocCard>
        ))}
      </CardGrid>
    </DocSection>
    <DocSection title="Usage rules">
      <ul>
        <li>Decorative icons use an empty alternative or are hidden from assistive technology.</li>
        <li>Icon-only controls require a localized accessible name.</li>
        <li>Directional icons mirror with interface direction; non-directional symbols do not.</li>
        <li>Do not extract these internal assets as a stable public API.</li>
      </ul>
    </DocSection>
  </DocPage>
);

const meta = {
  title: 'Mosaic Design System/Foundations/Icons',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = { render: () => <IconsPage /> };
