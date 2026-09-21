import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,p as n}from"./iframe-1_dYu9Ht.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";import{o as a,t as o}from"./Icons-DLfqkhXN.js";import{n as s,t as c}from"./Calendar-CBVnJcHd.js";function l(e,t){let n=new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`});return e instanceof Date?n.format(e):e?.start&&e.end?`${n.format(e.start)} – ${n.format(e.end)}`:e?.start?`${n.format(e.start)} – …`:``}var u,d,f;function p(){return(p=e((()=>{u=n(),r(),s(),a(),d=t(),f=(0,u.forwardRef)(function({className:e,defaultValue:t,disabled:n=!1,label:r,locale:a,mode:s=`single`,onValueChange:f,placeholder:p=`Select date`,presets:m,value:h,...g},_){let[v,y]=(0,u.useState)(t),[b,x]=(0,u.useState)(!1),S=(0,u.useRef)(null),C=(0,u.useRef)(null),w=(0,u.useRef)(!1),T=(0,u.useId)(),E=h??v,D=l(E,a)||p,O=e=>{h===void 0&&y(e),f?.(e),(s===`single`||!(e instanceof Date)&&e.end)&&x(!1)},k=e=>{e.key===`Escape`&&(e.stopPropagation(),x(!1))};return(0,u.useEffect)(()=>{b?(w.current=!0,C.current?.querySelector(`[role="gridcell"][tabindex="0"]`)?.focus()):w.current&&(w.current=!1,S.current?.focus())},[b]),(0,d.jsxs)(`div`,{...g,className:i(`mosaic-date-picker`,e),onKeyDown:k,ref:_,children:[(0,d.jsxs)(`button`,{"aria-controls":T,"aria-expanded":b,"aria-haspopup":`dialog`,"aria-label":`${r}: ${D}`,className:`mosaic-date-picker__trigger`,disabled:n,onClick:()=>x(e=>!e),ref:S,type:`button`,children:[(0,d.jsx)(`span`,{className:i(!E&&`mosaic-date-picker__placeholder`),children:D}),(0,d.jsx)(o,{})]}),b?(0,d.jsx)(`div`,{"aria-label":r,className:`mosaic-date-picker__popover`,id:T,ref:C,role:`dialog`,children:(0,d.jsx)(c,{locale:a,mode:s,onChange:O,presets:m,value:E})}):null]})}),f.__docgenInfo={description:``,methods:[],displayName:`DatePicker`,props:{defaultValue:{required:!1,tsType:{name:`union`,raw:`Date | DateRange`,elements:[{name:`Date`},{name:`DateRange`}]},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:``},locale:{required:!1,tsType:{name:`string`},description:``},mode:{required:!1,tsType:{name:`union`,raw:`'single' | 'range'`,elements:[{name:`literal`,value:`'single'`},{name:`literal`,value:`'range'`}]},description:``,defaultValue:{value:`'single'`,computed:!1}},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: Date | DateRange) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | DateRange`,elements:[{name:`Date`},{name:`DateRange`}]},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select date'`,computed:!1}},presets:{required:!1,tsType:{name:`Array`,elements:[{name:`CalendarPreset`}],raw:`CalendarPreset[]`},description:``},value:{required:!1,tsType:{name:`union`,raw:`Date | DateRange`,elements:[{name:`Date`},{name:`DateRange`}]},description:``}},composes:[`Omit`]}})))()}var m,h,g,_,v,y;function b(){return(b=e((()=>{p(),m={component:f,args:{label:`Choose a date`},parameters:{docs:{description:{component:`A labelled popup calendar trigger supporting single dates, ranges, and presets. Focus enters the calendar and returns to the trigger on close.`}}},title:`Mosaic Design System/Components/Forms/Date Picker`},h={},g={args:{mode:`range`,placeholder:`Select date range`}},_={args:{presets:[{label:`Today`,value:new Date},{label:`Next 7 days`,value:{start:new Date,end:new Date(Date.now()+5184e5)}}]}},v={args:{label:`اختر تاريخًا`,placeholder:`اختر التاريخ`},globals:{direction:`rtl`}},y=[`Playground`,`DateRange`,`WithPresets`,`RTL`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    placeholder: 'Select date range'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    presets: [{
      label: 'Today',
      value: new Date()
    }, {
      label: 'Next 7 days',
      value: {
        start: new Date(),
        end: new Date(Date.now() + 6 * 86400000)
      }
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'اختر تاريخًا',
    placeholder: 'اختر التاريخ'
  },
  globals: {
    direction: 'rtl'
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{g as DateRange,h as Playground,v as RTL,_ as WithPresets,y as __namedExportsOrder,m as default};