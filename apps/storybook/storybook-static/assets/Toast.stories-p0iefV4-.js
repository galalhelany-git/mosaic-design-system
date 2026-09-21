import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{o as a,r as o}from"./Icons-DLfqkhXN.js";var s,c,l,u,d;function f(){return(f=e((()=>{s=n(),r(),a(),c=t(),l=(0,s.forwardRef)(function({actionLabel:e,className:t,description:n,dismissLabel:r=`Dismiss notification`,error:a=!1,leading:s,onAction:l,onDismiss:u,title:d,...f},p){return(0,c.jsxs)(`div`,{...f,"aria-atomic":`true`,className:i(`mosaic-toast`,a&&`mosaic-toast--error`,t),ref:p,role:a?`alert`:`status`,children:[s?(0,c.jsx)(`span`,{"aria-hidden":`true`,className:`mosaic-snackbar__icon`,children:s}):null,(0,c.jsxs)(`div`,{className:`mosaic-toast__content`,children:[(0,c.jsx)(`div`,{className:`mosaic-toast__title`,children:d}),n?(0,c.jsx)(`div`,{className:`mosaic-toast__description`,children:n}):null]}),e?(0,c.jsx)(`button`,{className:`mosaic-toast__action`,onClick:l,type:`button`,children:e}):null,u?(0,c.jsx)(`button`,{"aria-label":r,className:`mosaic-toast__dismiss`,onClick:u,type:`button`,children:(0,c.jsx)(o,{})}):null]})}),u=(0,s.forwardRef)(function({className:e,icon:t,...n},r){return(0,c.jsx)(l,{...n,className:i(`mosaic-snackbar`,e),leading:t,ref:r})}),d=(0,s.forwardRef)(function({children:e,className:t,expanded:n=!0,label:r=`Notifications`,...a},o){return(0,c.jsx)(`div`,{...a,"aria-label":r,className:i(`mosaic-toast-viewport`,n?`mosaic-toast-viewport--expanded`:`mosaic-toast-viewport--stacked`,t),ref:o,role:`region`,children:e})}),l.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{actionLabel:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},dismissLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Dismiss notification'`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},leading:{required:!1,tsType:{name:`ReactNode`},description:``},onAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},u.__docgenInfo={description:``,methods:[],displayName:`Snackbar`,props:{icon:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},d.__docgenInfo={description:``,methods:[],displayName:`ToastViewport`,props:{expanded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Notifications'`,computed:!1}}},composes:[`HTMLAttributes`]}})))()}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{f(),p=t(),m=()=>(0,p.jsx)(`svg`,{fill:`none`,viewBox:`0 0 24 24`,children:(0,p.jsx)(`path`,{d:`m5 12 4 4L19 6`,stroke:`currentColor`,strokeWidth:`2`})}),h={component:l,args:{actionLabel:`Undo`,description:`Saturday, March 11, 2024 at 3:45 PM`,title:`Scheduled: Strategy Discussion`},parameters:{docs:{description:{component:`Toast uses a polite status region by default and an assertive alert for errors. Snackbar adds a status edge/icon; ToastViewport renders expanded or stacked groups. Lifecycle and queueing stay application-owned.`}}},title:`Mosaic Design System/Components/Feedback/Toast`},g={},_={args:{error:!0,title:`Unable to save changes`}},v={args:{onDismiss:()=>void 0}},y={render:e=>(0,p.jsx)(u,{...e,icon:(0,p.jsx)(m,{})})},b={render:()=>(0,p.jsxs)(d,{children:[(0,p.jsx)(l,{description:`First update`,title:`Notification one`}),(0,p.jsx)(l,{description:`Second update`,title:`Notification two`}),(0,p.jsx)(l,{description:`Third update`,title:`Notification three`})]})},x={render:()=>(0,p.jsxs)(d,{expanded:!1,children:[(0,p.jsx)(l,{title:`One`}),(0,p.jsx)(l,{title:`Two`}),(0,p.jsx)(l,{title:`Three`})]})},S={args:{actionLabel:`تراجع`,description:`تم الحفظ بنجاح`,dismissLabel:`إغلاق الإشعار`,title:`تم تحديث المشروع`},globals:{direction:`rtl`}},C=[`Playground`,`Error`,`Dismissible`,`SnackbarStory`,`ExpandedViewport`,`StackedViewport`,`RTL`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    title: 'Unable to save changes'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onDismiss: () => undefined
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Snackbar {...args} icon={<Check />} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ToastViewport>
      <Toast description="First update" title="Notification one" />
      <Toast description="Second update" title="Notification two" />
      <Toast description="Third update" title="Notification three" />
    </ToastViewport>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ToastViewport expanded={false}>
      <Toast title="One" />
      <Toast title="Two" />
      <Toast title="Three" />
    </ToastViewport>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    actionLabel: 'تراجع',
    description: 'تم الحفظ بنجاح',
    dismissLabel: 'إغلاق الإشعار',
    title: 'تم تحديث المشروع'
  },
  globals: {
    direction: 'rtl'
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{v as Dismissible,_ as Error,b as ExpandedViewport,g as Playground,S as RTL,y as SnackbarStory,x as StackedViewport,C as __namedExportsOrder,h as default};