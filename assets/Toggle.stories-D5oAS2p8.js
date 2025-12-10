import{j as n}from"./index-BhYKX6Xw.js";import{c as t}from"./index-PFhv2Mnp.js";import"./output-xDgBNoOz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CTFRWjhe.js";import"./index-BoO70ywZ.js";const p={title:"Components/Toggle",component:t.Root,args:{size:"md",color:"sf-green"},argTypes:{size:{options:["sm","md"],control:{type:"inline-radio"}},color:{options:["sf-green","succession-blue"],control:{type:"inline-radio"}}},parameters:{docs:{description:{component:`This story displays the \`Toggle\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Toggle{ComponentName}Props\`.

## Usage:

\`\`\`import { Toggle } from '@sf-digital-ui/react'\`\`\`

 Toggle is a composition of the following components:

 \`Toggle.Root\` - The outer wrapper for the toggle

\`Toggle.Control\` - The element that represents whether the toggle is on or off

 ## API Reference:
### Root
Props

\`size: 'sm' | 'md'\` - The size of the toggle

\`checked: boolean\` - The state of the toggle

\`disabled: boolean\` - Whether the toggle is disabled

\`onCheckedChange: (pressed: boolean) => void\` - Callback for when the state is changed

\`defaultChecked: boolean\` - The default state of the toggle

Data attribute

\`[data-state]: 'checked' | 'unchecked'\` - The state of the toggle

\`[data-disabled]\` - The toggle will be disabled

### Control
Props

\`size: 'sm' | 'md'\` - The size of the control

\`color: 'sf-green' | 'succession-blue'\` - The color of the control

Data atrribute

\`[data-state]: 'checked' | 'unchecked'\` - The state of the control

\`[data-disabled]\` - The control will be disabled`}}}},e={args:{size:"md",color:"sf-green"},render:o=>n.jsx(t.Root,{size:o.size,color:o.color,children:n.jsx(t.Control,{size:o.size})})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'sf-green'
  },
  render: args => <Toggle.Root size={args.size} color={args.color}>
            <Toggle.Control size={args.size} />
        </Toggle.Root>
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
