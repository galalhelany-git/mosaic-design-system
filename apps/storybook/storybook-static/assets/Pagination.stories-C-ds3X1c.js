import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./Pagination-DpojtxU5.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=n(),r(),o=t(),s={component:i,args:{currentPage:5,onPageChange:()=>void 0,totalPages:12},parameters:{docs:{description:{component:`A labelled pagination landmark with current-page semantics, bounded previous/next actions, configurable labels, and compact ellipsis ranges.`}}},title:`Mosaic Design System/Components/Navigation/Pagination`},c={render:e=>{let[t,n]=(0,a.useState)(e.currentPage);return(0,o.jsx)(i,{...e,currentPage:t,onPageChange:n})}},l={args:{currentPage:1}},u={args:{currentPage:12}},d={args:{label:`ترقيم الصفحات`,nextAriaLabel:`الصفحة التالية`,nextLabel:`التالي`,previousAriaLabel:`الصفحة السابقة`,previousLabel:`السابق`},globals:{direction:`rtl`}},f=[`Playground`,`Start`,`End`,`RTL`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 12
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'ترقيم الصفحات',
    nextAriaLabel: 'الصفحة التالية',
    nextLabel: 'التالي',
    previousAriaLabel: 'الصفحة السابقة',
    previousLabel: 'السابق'
  },
  globals: {
    direction: 'rtl'
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as End,c as Playground,d as RTL,l as Start,f as __namedExportsOrder,s as default};