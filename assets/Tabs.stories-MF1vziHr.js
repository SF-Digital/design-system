import{j as a}from"./index-tuJywWJo.js";import{a as t}from"./index-RhAJikka.js";import"./output-DUyBmGnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BMCIO354.js";import"./index-voX17IvO.js";const b={title:"Components/Tabs",component:t.Root,args:{size:"base",variant:"solid"},argTypes:{size:{control:{type:"inline-radio"},options:["base","lg"]},variant:{control:{type:"inline-radio"},options:["solid","underline"]},color:{control:{type:"inline-radio"},options:["sf-green","succession-blue"]}},parameters:{docs:{description:{component:`This story displays the \`Tabs\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Tabs{ComponentName}Props\`.

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

\`size: 'base' | 'lg'\` (Only for Trigger) - The size of the trigger (default: base)

\`color: 'sf-green' | 'succession-blue'\` (Only for Trigger) - The color of the trigger (default: sf-green)

Data attribute

\`[data-state]: 'active' | 'disabled'\` - The state of the trigger

\`[data-disabled]\` (Only for Trigger) - The trigger will be disabled`}}}},o={args:{},render:e=>a.jsx(t.Root,{defaultValue:"one",orientation:"horizontal",children:a.jsxs(t.List,{className:e.variant==="solid"?"gap-2 flex-row flex":"",children:[a.jsx(t.Trigger,{size:e.size,variant:e.variant,color:e.color,value:"one",children:"One"}),a.jsx(t.Trigger,{size:e.size,variant:e.variant,color:e.color,value:"two",children:"Two"}),a.jsx(t.Trigger,{size:e.size,variant:e.variant,color:e.color,value:"three",children:"Three"})]})})};var r,n,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: args => <Tabs.Root defaultValue="one" orientation="horizontal">
      <Tabs.List className={args.variant === 'solid' ? 'gap-2 flex-row flex' : ''}>
        <Tabs.Trigger size={args.size} variant={args.variant} color={args.color} value="one">
          One
        </Tabs.Trigger>
        <Tabs.Trigger size={args.size} variant={args.variant} color={args.color} value="two">
          Two
        </Tabs.Trigger>
        <Tabs.Trigger size={args.size} variant={args.variant} color={args.color} value="three">
          Three
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,b as default};
