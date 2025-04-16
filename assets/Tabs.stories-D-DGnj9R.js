import{j as n}from"./index-WQZq-jBe.js";import{a}from"./index-BmaKdjaP.js";import"./output-B3bB6xwV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";import"./index-CYQpqK1Q.js";const T={title:"Components/Tabs",component:a.Root,args:{size:"base",variant:"solid"},argTypes:{size:{control:{type:"inline-radio"},options:["base","lg"]},variant:{control:{type:"inline-radio"},options:["solid","underline","panel","underline-filled"]},color:{control:{type:"inline-radio"},options:["sf-green","succession-blue","neutral"]}},parameters:{docs:{description:{component:`This story displays the \`Tabs\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Tabs{ComponentName}Props\`.

## Usage:

 \`\`\`import { Tabs } from '@sf-digital-ui/react'\`\`\`

 Tabs is a composition of the following components:

\`Tabs.Root\` - Contains all the tab component parts

\`Tabs.List\` - Contains the triggers aligned along the edge of active content

\`Tabs.Trigger\` - The clickable element that activates its assocaited content

## API Reference:
### Root
Props

\`hasBackground: boolean\` - If \`true\`, the root will have a backgrounda

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

\`variant: 'solid' | 'underline' | 'underline-filled' | 'panel'\` (Only for Trigger) - The variant of the trigger (default: solid)

\`size: 'base' | 'lg'\` (Only for Trigger) - The size of the trigger (default: base)

\`color: 'sf-green' | 'succession-blue' | 'neutral'\` (Only for Trigger) - The color of the trigger (default: sf-green)

Data attribute

\`[data-state]: 'active' | 'disabled'\` - The state of the trigger

\`[data-disabled]\` (Only for Trigger) - The trigger will be disabled`}}}},t={args:{},render:e=>n.jsx(a.Root,{hasBackground:e.variant==="panel",className:"flex flex-row items-start",defaultValue:"one",orientation:"horizontal",children:n.jsxs(a.List,{className:e.variant==="solid"?"gap-2 flex-row flex":e.variant==="panel"?"flex flex-row gap-1":"",children:[n.jsx(a.Trigger,{size:e.size,variant:e.variant,color:e.color,value:"one",children:"One"}),n.jsx(a.Trigger,{size:e.size,variant:e.variant,color:e.color,value:"two",children:"Two"}),n.jsx(a.Trigger,{size:e.size,variant:e.variant,color:e.color,value:"three",children:"Three"})]})})};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: args => <Tabs.Root hasBackground={args.variant === 'panel'} className='flex flex-row items-start' defaultValue='one' orientation='horizontal'>
            <Tabs.List className={args.variant === 'solid' ? 'gap-2 flex-row flex' : args.variant === 'panel' ? 'flex flex-row gap-1' : ''}>
                <Tabs.Trigger size={args.size} variant={args.variant} color={args.color} value='one'>
                    One
                </Tabs.Trigger>
                <Tabs.Trigger size={args.size} variant={args.variant} color={args.color} value='two'>
                    Two
                </Tabs.Trigger>
                <Tabs.Trigger size={args.size} variant={args.variant} color={args.color} value='three'>
                    Three
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,T as default};
