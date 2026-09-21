import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";var a,o,s;function c(){return(c=e((()=>{a=n(),r(),o=t(),s=(0,a.forwardRef)(function({"aria-label":e,className:t,disabled:n=!1,icon:r,loading:a=!1,notification:s,size:c=`lg`,type:l=`button`,...u},d){return(0,o.jsxs)(`button`,{...u,"aria-busy":a||void 0,"aria-label":e,className:i(`mosaic-icon-button`,`mosaic-icon-button--${c}`,t),"data-loading":a||void 0,disabled:n||a,ref:d,type:l,children:[(0,o.jsx)(`span`,{"aria-hidden":`true`,className:`mosaic-icon-button__icon`,children:a?(0,o.jsx)(`span`,{className:`mosaic-icon-button__spinner`}):r}),s===void 0?null:(0,o.jsx)(`span`,{className:`mosaic-icon-button__notification`,children:s})]})}),s.__docgenInfo={description:``,methods:[],displayName:`IconButton`,props:{"aria-label":{required:!0,tsType:{name:`string`},description:``},icon:{required:!0,tsType:{name:`ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},notification:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'lg'`,computed:!1}},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}},composes:[`Omit`]}})))()}var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c(),l=t(),u=()=>(0,l.jsx)(`svg`,{fill:`none`,viewBox:`0 0 24 24`,children:(0,l.jsx)(`path`,{d:`M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`2`})}),d={args:{"aria-label":`Notifications`,icon:(0,l.jsx)(u,{}),size:`lg`},component:s,parameters:{docs:{description:{component:`A compact icon-only action. An accessible label is required and is independent of the decorative icon.`}}},title:`Mosaic Design System/Components/Actions/IconButton`},f={},p={render:()=>(0,l.jsx)(`div`,{className:`story-row story-row--end`,children:[`lg`,`md`,`sm`].map(e=>(0,l.jsx)(s,{"aria-label":`${e} notifications`,icon:(0,l.jsx)(u,{}),size:e},e))})},m={args:{notification:3}},h={args:{loading:!0}},g={args:{disabled:!0}},_={args:{notification:3},globals:{direction:`rtl`}},v=[`Playground`,`Sizes`,`Notification`,`Loading`,`Disabled`,`RTL`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-row story-row--end">
      {(['lg', 'md', 'sm'] as const).map(size => <IconButton aria-label={\`\${size} notifications\`} icon={<Bell />} key={size} size={size} />)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    notification: 3
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    notification: 3
  },
  globals: {
    direction: 'rtl'
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as Disabled,h as Loading,m as Notification,f as Playground,_ as RTL,p as Sizes,v as __namedExportsOrder,d as default};