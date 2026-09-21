import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-1_dYu9Ht.js";import{n,t as r}from"./Button-C7BjAexb.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),a=()=>(0,i.jsx)(`svg`,{"aria-hidden":`true`,fill:`none`,viewBox:`0 0 24 24`,children:(0,i.jsx)(`path`,{d:`M5 12h14M13 6l6 6-6 6`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`2`})}),o={argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},variant:{control:`inline-radio`,options:[`primary`,`secondary`,`ghost`,`tertiary`]}},args:{children:`Button text`,size:`lg`,variant:`primary`},component:r,parameters:{docs:{description:{component:`Use Button for user-triggered actions. It uses a native button, preserves accessible keyboard behavior, and maps supported size, variant, disabled, loading, and icon properties from Figma.`}}},title:`Mosaic Design System/Components/Actions/Button`},s={},c={render:()=>(0,i.jsxs)(`div`,{className:`story-row`,children:[(0,i.jsx)(r,{variant:`primary`,children:`Primary`}),(0,i.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,i.jsx)(r,{variant:`ghost`,children:`Ghost`}),(0,i.jsx)(r,{variant:`tertiary`,children:`Tertiary`})]})},l={render:()=>(0,i.jsxs)(`div`,{className:`story-row story-row--end`,children:[(0,i.jsx)(r,{size:`lg`,children:`Large`}),(0,i.jsx)(r,{size:`md`,children:`Medium`}),(0,i.jsx)(r,{size:`sm`,children:`Small`})]})},u={args:{leadingIcon:(0,i.jsx)(a,{}),trailingIcon:(0,i.jsx)(a,{})}},d={render:()=>(0,i.jsxs)(`div`,{className:`story-row`,children:[(0,i.jsx)(r,{loading:!0,variant:`primary`,children:`Saving changes`}),(0,i.jsx)(r,{loading:!0,variant:`secondary`,children:`Saving changes`}),(0,i.jsx)(r,{loading:!0,variant:`ghost`,children:`Saving changes`})]})},f={args:{disabled:!0}},p={args:{leadingIcon:(0,i.jsx)(a,{}),trailingIcon:(0,i.jsx)(a,{})},globals:{direction:`rtl`}},m=[`Playground`,`Variants`,`Sizes`,`Icons`,`Loading`,`Disabled`,`RTL`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-row story-row--end">
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
      <Button size="sm">Small</Button>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: <ExampleIcon />,
    trailingIcon: <ExampleIcon />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      <Button loading variant="primary">
        Saving changes
      </Button>
      <Button loading variant="secondary">
        Saving changes
      </Button>
      <Button loading variant="ghost">
        Saving changes
      </Button>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: <ExampleIcon />,
    trailingIcon: <ExampleIcon />
  },
  globals: {
    direction: 'rtl'
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Disabled,u as Icons,d as Loading,s as Playground,p as RTL,l as Sizes,c as Variants,m as __namedExportsOrder,o as default};