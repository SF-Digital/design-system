import{j as n}from"./jsx-runtime--26OcTxz.js";import{b as o}from"./index-D-8obwC5.js";import"./output-pFW2mO8h.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-B99Sp-t6.js";const c={title:"Components/Toggle",component:o.Root,args:{size:"md"},argTypes:{size:{options:["sm","md"],control:{type:"inline-radio"}}},parameters:{docs:{description:{component:`This story displays the \`Toggle\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Toggle{ComponentName}Props\`.

## Usage:

\`\`\`import { Toggle } from '@sf-digital-ui/react'\`\`\`

 Toggle is a composition of the following components:

 \`Toggle.Root\` - The outer wrapper for the toggle

\`Toggle.Control\` - The element that represents whether the toggle is on or off

 ## API Reference:
### Root
Props

\`size: 'sm' | 'md'\` - The size of the toggle

\`pressed: boolean\` - The state of the toggle

\`disabled: boolean\` - Whether the toggle is disabled

\`onPressedChange: (pressed: boolean) => void\` - Callback for when the toggle is pressed

\`defaultPressed: boolean\` - The default state of the toggle

Data attribute

\`[data-state]: 'on' | 'off'\` - The state of the toggle

\`[data-disabled]\` - The toggle will be disabled

### Control
Props

\`size: 'sm' | 'md'\` - The size of the control`}}}},e={args:{size:"md"},render:t=>n.jsx(o.Root,{size:t.size,children:n.jsx(o.Control,{size:t.size})})};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => <Toggle.Root size={args.size}>
      <Toggle.Control size={args.size} />
    </Toggle.Root>
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,c as default};
