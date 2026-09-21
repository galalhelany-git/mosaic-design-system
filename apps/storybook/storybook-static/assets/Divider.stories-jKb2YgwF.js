import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-1_dYu9Ht.js";import{n,t as r}from"./clsx-CTwy9ux-.js";function i({className:e,label:t,orientation:n=`horizontal`,size:i=`md`,variant:o=`solid`,...s}){return(0,a.jsx)(`div`,{...s,"aria-orientation":n,className:r(`mosaic-divider`,`mosaic-divider--${n}`,`mosaic-divider--${i}`,`mosaic-divider--${o}`,t&&`mosaic-divider--labelled`,e),role:`separator`,children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`mosaic-divider__line`}),(0,a.jsx)(`span`,{className:`mosaic-divider__label`,children:t}),(0,a.jsx)(`span`,{className:`mosaic-divider__line`})]}):null})}var a;function o(){return(o=e((()=>{n(),a=t(),i.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{label:{required:!1,tsType:{name:`ReactNode`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | 'hg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'hg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'solid' | 'dashed'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dashed'`}]},description:``,defaultValue:{value:`'solid'`,computed:!1}}},composes:[`Omit`]}})))()}var s,c,l,u,d,f,p;function m(){return(m=e((()=>{o(),s=t(),c={args:{orientation:`horizontal`,size:`md`,variant:`solid`},component:i,parameters:{docs:{description:{component:`Separates adjacent content. Horizontal dividers may include the text variant defined in Figma.`}}},title:`Mosaic Design System/Components/Data Display/Divider`},l={},u={args:{variant:`dashed`}},d={args:{label:`Divider label`}},f={args:{orientation:`vertical`},decorators:[e=>(0,s.jsx)(`div`,{style:{height:160},children:(0,s.jsx)(e,{})})]},p=[`Playground`,`Dashed`,`WithText`,`Vertical`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dashed'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Divider label'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div style={{
    height: 160
  }}>
        <Story />
      </div>]
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as Dashed,l as Playground,f as Vertical,d as WithText,p as __namedExportsOrder,c as default};