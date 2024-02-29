import{j as t}from"./jsx-runtime--26OcTxz.js";import{a}from"./index-D-8obwC5.js";import"./output-pFW2mO8h.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-B99Sp-t6.js";const b={title:"Components/Tabs",component:a.Root,args:{size:"base",variant:"solid"},argTypes:{size:{control:{type:"inline-radio"},options:["base","lg"]},variant:{control:{type:"inline-radio"},options:["solid","underline"]}},parameters:{docs:{description:{component:`This story displays the \`Tabs\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Tabs{ComponentName}Props\`.

## Usage:

 \`\`\`import { Tabs } from '@sf-digital-ui/react'\`\`\`

 Tabs is a composition of the following components:

\`Tabs.Root\` - Contains all the tab component parts

\`Tabs.List\` - Contains the triggers aligned along the edge of active content

\`Tabs.Trigger\` - The clickable element that activates its assocaited content

## API Reference:
### Root
Props

\`orientation: 'horizontal' | 'vertical'\` - The orientation of the tabs

\`activationMode: 'automatic' | 'manual'\` - The activation mode of the tabs

Data attribute

\`[data-orientation]: 'horizontal' | 'vertical'\` - The orientation of the tabs

### List
Props

\`loop: boolean\` - if \`true\`, keyboard navigation will loop from last tab to first, and vice versa

 Data attribute

### Trigger & Content
Props

\`value: string\` - The unique value that associates the contnet with the trigger

\`disabled: boolean\` (Only for Trigger) - If \`true\`, the trigger will be disabled

\`variant: 'solid' | 'underline'\` (Only for Trigger) - The variant of the trigger (default: solid)

Data attribute

\`[data-state]: 'active' | 'disabled'\` - The state of the trigger

\`[data-disabled]\` (Only for Trigger) - The trigger will be disabled`}}}},n={args:{},render:e=>t.jsx(a.Root,{defaultValue:"one",orientation:"horizontal",children:t.jsxs(a.List,{className:e.variant==="solid"?"gap-2 flex-row flex":"",children:[t.jsx(a.Trigger,{size:e.size,variant:e.variant,value:"one",children:"One"}),t.jsx(a.Trigger,{size:e.size,variant:e.variant,value:"two",children:"Two"}),t.jsx(a.Trigger,{size:e.size,variant:e.variant,value:"three",children:"Three"})]})})};var i,r,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: args => <Tabs.Root defaultValue="one" orientation="horizontal">
      <Tabs.List className={args.variant === 'solid' ? 'gap-2 flex-row flex' : ''}>
        <Tabs.Trigger size={args.size} variant={args.variant} value="one">
          One
        </Tabs.Trigger>
        <Tabs.Trigger size={args.size} variant={args.variant} value="two">
          Two
        </Tabs.Trigger>
        <Tabs.Trigger size={args.size} variant={args.variant} value="three">
          Three
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,b as default};
