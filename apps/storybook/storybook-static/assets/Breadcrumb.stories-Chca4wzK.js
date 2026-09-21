import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{i as a,n as o,o as s}from"./Icons-DLfqkhXN.js";var c,l,u;function d(){return(d=e((()=>{c=n(),r(),s(),l=t(),u=(0,c.forwardRef)(function({className:e,items:t,label:n=`Breadcrumb`,maxItems:r=5,moreLabel:s=`More pages`,...c},u){let d=t.length>r?[t[0],null,...t.slice(-(r-2))]:t;return(0,l.jsx)(`nav`,{...c,"aria-label":n,className:i(`mosaic-breadcrumb`,e),ref:u,children:(0,l.jsx)(`ol`,{className:`mosaic-breadcrumb__list`,children:d.map((e,t)=>{let n=t===d.length-1;return(0,l.jsxs)(`li`,{className:`mosaic-breadcrumb__item`,children:[t>0?(0,l.jsx)(o,{className:`mosaic-breadcrumb__separator`,direction:`right`}):null,e?n||!e.href?(0,l.jsx)(`span`,{"aria-current":n?`page`:void 0,className:i(n&&`mosaic-breadcrumb__current`),children:e.label}):(0,l.jsx)(`a`,{href:e.href,onClick:e.onClick,children:e.label}):(0,l.jsx)(`span`,{"aria-label":s,className:`mosaic-breadcrumb__ellipsis`,role:`img`,children:(0,l.jsx)(a,{})})]},e?`${String(e.label)}-${t}`:`ellipsis`)})})})}),u.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Breadcrumb'`,computed:!1}},maxItems:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},moreLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'More pages'`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var f,p,m,h,g;function _(){return(_=e((()=>{d(),f={component:u,args:{items:[{href:`#home`,label:`Home`},{href:`#projects`,label:`Projects`},{href:`#mosaic`,label:`Mosaic`},{href:`#components`,label:`Components`},{label:`Breadcrumb`}]},parameters:{docs:{description:{component:`A navigation landmark with ordered hierarchy, link semantics, current-page state, and optional middle-item collapse.`}}},title:`Mosaic Design System/Components/Navigation/Breadcrumb`},p={},m={args:{items:[{href:`#1`,label:`Home`},{href:`#2`,label:`Workspace`},{href:`#3`,label:`Projects`},{href:`#4`,label:`Design system`},{href:`#5`,label:`Navigation`},{label:`Breadcrumb`}],maxItems:4}},h={globals:{direction:`rtl`}},g=[`Playground`,`Collapsed`,`RTL`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      href: '#1',
      label: 'Home'
    }, {
      href: '#2',
      label: 'Workspace'
    }, {
      href: '#3',
      label: 'Projects'
    }, {
      href: '#4',
      label: 'Design system'
    }, {
      href: '#5',
      label: 'Navigation'
    }, {
      label: 'Breadcrumb'
    }],
    maxItems: 4
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Collapsed,p as Playground,h as RTL,g as __namedExportsOrder,f as default};