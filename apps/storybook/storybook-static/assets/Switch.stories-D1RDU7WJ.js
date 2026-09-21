import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";var a,o,s;function c(){return(c=e((()=>{a=n(),r(),o=t(),s=(0,a.forwardRef)(function({className:e,disabled:t=!1,id:n,indeterminate:r=!1,label:s,size:c=`md`,...l},u){let d=(0,a.useId)(),f=(0,a.useRef)(null),p=n??`mosaic-switch-${d}`;(0,a.useEffect)(()=>{f.current&&(f.current.indeterminate=r)},[r]);let m=e=>{f.current=e,typeof u==`function`?u(e):u&&(u.current=e)};return(0,o.jsxs)(`label`,{className:i(`mosaic-switch`,`mosaic-switch--${c}`,t&&`mosaic-switch--disabled`,e),htmlFor:p,children:[(0,o.jsx)(`input`,{...l,className:`mosaic-switch__input`,disabled:t,id:p,ref:m,role:`switch`,type:`checkbox`}),(0,o.jsx)(`span`,{"aria-hidden":`true`,className:`mosaic-switch__track`,"data-indeterminate":r||void 0,children:(0,o.jsx)(`span`,{className:`mosaic-switch__thumb`})}),(0,o.jsx)(`span`,{children:s})]})}),s.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!0,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),l={args:{label:`Switch label`,size:`md`},component:s,parameters:{docs:{description:{component:`A native checkbox exposed as a switch. Figma supplies medium and small sizes; mixed is retained for parity.`}}},title:`Mosaic Design System/Components/Forms/Switch`},u={},d={args:{defaultChecked:!0}},f={args:{indeterminate:!0}},p={args:{size:`sm`}},m={args:{disabled:!0}},h={args:{defaultChecked:!0},globals:{direction:`rtl`}},g=[`Playground`,`On`,`Intermediate`,`Small`,`Disabled`,`RTL`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  globals: {
    direction: 'rtl'
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Disabled,f as Intermediate,d as On,u as Playground,h as RTL,p as Small,g as __namedExportsOrder,l as default};