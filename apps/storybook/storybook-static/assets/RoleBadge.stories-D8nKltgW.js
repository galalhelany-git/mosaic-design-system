import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-1_dYu9Ht.js";import{n,r,t as i}from"./RoleBadge-C-BuYtSb.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a=t(),o={component:i,args:{role:`super-admin`,size:32},parameters:{docs:{description:{component:`A named role indicator using the exact Figma role artwork. RoleBadgeCell combines the icon with an optional visible role name.`}}},title:`Mosaic Design System/Components/Data Display/Role Badge`},s={},c={render:()=>(0,a.jsx)(`div`,{className:`story-row`,children:[`super-admin`,`system-admin`,`organization-admin`,`user`].map(e=>(0,a.jsx)(i,{role:e},e))})},l={args:{size:16}},u={render:()=>(0,a.jsx)(`div`,{className:`story-stack`,children:[`super-admin`,`system-admin`,`organization-admin`,`user`].map(e=>(0,a.jsx)(n,{role:e},e))})},d={globals:{direction:`rtl`},render:u.render},f=[`Playground`,`Roles`,`Small`,`Cells`,`RTL`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-row">
      {(['super-admin', 'system-admin', 'organization-admin', 'user'] as const).map(role => <RoleBadge key={role} role={role} />)}
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 16
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-stack">
      {(['super-admin', 'system-admin', 'organization-admin', 'user'] as const).map(role => <RoleBadgeCell key={role} role={role} />)}
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  render: Cells.render
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Cells,s as Playground,d as RTL,c as Roles,l as Small,f as __namedExportsOrder,o as default};