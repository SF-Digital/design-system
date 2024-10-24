import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{C as o}from"./index-CXNXgn4e.js";/* empty css               */import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";const C={title:"Form/Checkbox",component:o.Root,args:{size:"md",checked:!0},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"},checked:{control:{type:"boolean"}}}},parameters:{docs:{description:{component:`This story displays the \`Checkbox\` component, which is a React Element built using Pattern Composition.

## Usage:
\`Checkbox.Root\` - The controller of the checkbox.

\`Checkbox.Indicator\` - The element that will handle the ui feedback showing the state of the component.

\`Checkbox.Check\` - The check mark that will appear when the state is .

## API Reference:
### Root

\`size: 'sm' | 'md' | 'lg'\` - The size of the checkbox.

\`checked: boolean\` - Whether the checkbox is checked.`}}}},n={args:{children:e.jsx(e.Fragment,{children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})})}},t={render:c=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(o.Root,{size:c.size,checked:c.checked,children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})}),e.jsx("p",{className:` text-primary-green-500 text-sf-${c.size??"sm"} font-auto`,children:"Checkbox Label"})]})};var r,s,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: <>
        <Checkbox.Indicator>
          <Checkbox.Check />
        </Checkbox.Indicator>
      </>
  }
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,h,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(h=t.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const g=["Primary","WithLabel"];export{n as Primary,t as WithLabel,g as __namedExportsOrder,C as default};
