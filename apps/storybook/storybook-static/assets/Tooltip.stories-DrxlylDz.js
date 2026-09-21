import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{n as a,t as o}from"./Button-C7BjAexb.js";var s,c,l;function u(){return(u=e((()=>{s=n(),r(),c=t(),l=(0,s.forwardRef)(function({children:e,className:t,content:n,placement:r=`top`,...a},o){let[l,u]=(0,s.useState)(!1),d=(0,s.useId)(),f=e.props[`aria-describedby`],p=(0,s.isValidElement)(e)?(0,s.cloneElement)(e,{"aria-describedby":l?[f,d].filter(Boolean).join(` `):f,onBlur:t=>{e.props.onBlur?.(t),u(!1)},onFocus:t=>{e.props.onFocus?.(t),u(!0)},onMouseEnter:t=>{e.props.onMouseEnter?.(t),u(!0)},onMouseLeave:t=>{e.props.onMouseLeave?.(t),u(!1)},onKeyDown:t=>{e.props.onKeyDown?.(t),t.key===`Escape`&&u(!1)}}):e;return(0,c.jsxs)(`span`,{...a,className:i(`mosaic-tooltip`,`mosaic-tooltip--${r}`,t),ref:o,children:[p,l?(0,c.jsx)(`span`,{className:`mosaic-tooltip__content`,id:d,role:`tooltip`,children:n}):null]})}),l.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{children:{required:!0,tsType:{name:`ReactElement`},description:``},content:{required:!0,tsType:{name:`ReactNode`},description:``},placement:{required:!1,tsType:{name:`union`,raw:`'top' | 'right' | 'bottom' | 'left'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}}},composes:[`Omit`]}})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{a(),u(),d=t(),f={component:l,args:{children:(0,d.jsx)(o,{children:`Hover or focus`}),content:`Helpful context`,placement:`top`},parameters:{docs:{description:{component:"Supplementary text shown on hover and keyboard focus. The trigger receives `aria-describedby`; Escape dismisses the tooltip. Do not place essential or interactive content inside."}}},title:`Mosaic Design System/Components/Feedback/Tooltip`},p={},m={render:()=>(0,d.jsx)(`div`,{className:`story-row`,style:{padding:100},children:[`top`,`right`,`bottom`,`left`].map(e=>(0,d.jsx)(l,{content:e,placement:e,children:(0,d.jsx)(o,{size:`sm`,variant:`ghost`,children:e})},e))})},h={args:{children:(0,d.jsx)(o,{children:`معلومات`}),content:`معلومات إضافية`,placement:`right`},globals:{direction:`rtl`}},g=[`Playground`,`Placements`,`RTL`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-row" style={{
    padding: 100
  }}>
      {(['top', 'right', 'bottom', 'left'] as const).map(placement => <Tooltip content={placement} key={placement} placement={placement}>
          <Button size="sm" variant="ghost">
            {placement}
          </Button>
        </Tooltip>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>معلومات</Button>,
    content: 'معلومات إضافية',
    placement: 'right'
  },
  globals: {
    direction: 'rtl'
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Placements,p as Playground,h as RTL,g as __namedExportsOrder,f as default};