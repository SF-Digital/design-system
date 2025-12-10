import{j as e}from"./index-BhYKX6Xw.js";import{R as o}from"./index-PFhv2Mnp.js";import"./output-xDgBNoOz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CTFRWjhe.js";import"./index-BoO70ywZ.js";const f={title:"Form/RadioGroup",component:o.Root,args:{size:"sm",defaultValue:"1"},argTypes:{color:{control:{type:"inline-radio"},options:["sf-green","succession-blue"]},size:{control:"inline-radio",options:["sm","md","lg"]}},parameters:{docs:{description:{component:`This story displays the \`RadioGroup\` component, which is a React Element built using Pattern Composition.

## Usage:

\`RadioGroup.Root\` - The root element wrapping the group of \`x\` items.

\`RadioGroup.Item\` - The individual radio item.

## API Reference:
### Item

\`size: 'sm' | 'md' | 'lg'\` - The size of the radio item.

\`color: 'sf-green' | 'succession-blue'\` - The color of the checkbox.`}}}},s={render:r=>e.jsxs(o.Root,{...r,children:[e.jsx(o.Item,{value:"1",...r}),e.jsx(o.Item,{value:"2",...r}),e.jsx(o.Item,{value:"3",...r})]})},t={render:r=>e.jsx(o.Root,{...r,children:e.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[e.jsx(o.Item,{value:"1",size:"sm"}),e.jsx("p",{className:"text-sf-sm text-primary-green-500",children:"Radio Label"})]})})};var a,i,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <RadioGroup.Root {...args}>
            <RadioGroup.Item value='1' {...args} />
            <RadioGroup.Item value='2' {...args} />
            <RadioGroup.Item value='3' {...args} />
        </RadioGroup.Root>
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <RadioGroup.Root {...args}>
            <div className='flex flex-row gap-2 items-center'>
                <RadioGroup.Item value='1' size='sm' />
                <p className='text-sf-sm text-primary-green-500'>Radio Label</p>
            </div>
        </RadioGroup.Root>
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const h=["Default","WithLabel"];export{s as Default,t as WithLabel,h as __namedExportsOrder,f as default};
