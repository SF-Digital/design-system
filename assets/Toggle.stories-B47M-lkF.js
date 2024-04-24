import{j as n}from"./jsx-runtime--26OcTxz.js";import{b as o}from"./index-XJWllaE7.js";import"./output-CM7J8t0x.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-B99Sp-t6.js";const p={title:"Components/Toggle",component:o.Root,args:{size:"md"},argTypes:{size:{options:["sm","md"],control:{type:"inline-radio"}}},parameters:{docs:{description:{component:`This story displays the \`Toggle\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Toggle{ComponentName}Props\`.

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

Data atrribute

\`[data-state]: 'checked' | 'unchecked'\` - The state of the control

\`[data-disabled]\` - The control will be disabled`}}}},e={args:{size:"md"},render:t=>n.jsx(o.Root,{size:t.size,children:n.jsx(o.Control,{size:t.size})})};var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => <Toggle.Root size={args.size}>
      <Toggle.Control size={args.size} />
    </Toggle.Root>
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,p as default};
