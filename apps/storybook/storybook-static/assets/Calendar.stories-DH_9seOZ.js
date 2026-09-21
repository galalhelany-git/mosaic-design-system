import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./Calendar-CBVnJcHd.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=n(),r(),o=t(),s={component:i,args:{month:new Date(2024,9,1)},parameters:{docs:{description:{component:`A locale-aware single or range calendar grid. Arrow keys move by day/week, Home and End move within a week, and Page Up/Down move by month.`}}},title:`Mosaic Design System/Components/Forms/Calendar`},c={render:e=>{let[t,n]=(0,a.useState)(new Date(2024,9,17));return(0,o.jsx)(i,{...e,onChange:n,value:t})}},l={args:{mode:`range`},render:e=>{let[t,n]=(0,a.useState)({start:new Date(2024,9,10),end:new Date(2024,9,17)});return(0,o.jsx)(i,{...e,onChange:n,value:t})}},u={args:{presets:[{label:`Today`,value:new Date},{label:`This week`,value:{start:new Date,end:new Date(Date.now()+5184e5)}}]}},d={globals:{direction:`rtl`},render:c.render},f=[`Single`,`Range`,`WithPresets`,`RTL`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | DateRange>(new Date(2024, 9, 17));
    return <Calendar {...args} onChange={setDate} value={date} />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'range'
  },
  render: args => {
    const [range, setRange] = useState<Date | DateRange>({
      start: new Date(2024, 9, 10),
      end: new Date(2024, 9, 17)
    });
    return <Calendar {...args} onChange={setRange} value={range} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    presets: [{
      label: 'Today',
      value: new Date()
    }, {
      label: 'This week',
      value: {
        start: new Date(),
        end: new Date(Date.now() + 6 * 86400000)
      }
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    direction: 'rtl'
  },
  render: Single.render
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as RTL,l as Range,c as Single,u as WithPresets,f as __namedExportsOrder,s as default};