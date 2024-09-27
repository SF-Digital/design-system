import{j as e}from"./jsx-runtime-CKrituN3.js";import{C as o}from"./index-BeRr3Rf_.js";import"./output-DCyHdq3e.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";const g={title:"Form/Checkbox",component:o.Root,args:{size:"md",checked:!0},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"},checked:{control:{type:"boolean"}}}},parameters:{docs:{description:{component:`This story displays the \`Checkbox\` component, which is a React Element built using Pattern Composition.

## Usage:
\`Checkbox.Root\` - The controller of the checkbox.

\`Checkbox.Indicator\` - The element that will handle the ui feedback showing the state of the component.

\`Checkbox.Check\` - The check mark that will appear when the state is .

## API Reference:
### Root

\`size: 'sm' | 'md' | 'lg'\` - The size of the checkbox.

\`checked: boolean\` - Whether the checkbox is checked.`}}}},t={args:{children:e.jsx(e.Fragment,{children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})})}},n={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(o.Root,{size:r.size,checked:r.checked,children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})}),e.jsx("p",{className:` text-primary-green-500 text-sf-${r.size??"sm"} font-auto`,children:"Checkbox Label"})]})};var c,s,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        <Checkbox.Indicator>
          <Checkbox.Check />
        </Checkbox.Indicator>
      </>
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,h,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px'
  }}>
      <Checkbox.Root size={args.size} checked={args.checked}>
        <Checkbox.Indicator>
          <Checkbox.Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={\` text-primary-green-500 text-sf-\${args.size ?? 'sm'} font-auto\`}>
        Checkbox Label
      </p>
    </div>
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const f=["Primary","WithLabel"];export{t as Primary,n as WithLabel,f as __namedExportsOrder,g as default};
