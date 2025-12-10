import{j as e}from"./index-BhYKX6Xw.js";import{S as t,d as h}from"./index-PFhv2Mnp.js";import{c as g}from"./output-xDgBNoOz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CTFRWjhe.js";import"./index-BoO70ywZ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=g("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),j={title:"Form/Select",component:t.Root,args:{color:"sf-green"},argTypes:{color:{options:["sf-green","succession-blue"],control:{type:"inline-radio"}}},parameters:{docs:{description:{component:`This story displays the \`Select\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Select{ComponentName}Props\`.

## Usage:

\`\`\`import { Select } from '@sf-digital-ui/react'\`\`\`

Select is a composition of the following components:

\`Select.Root\` - Contains all the select parts

\`Select.Trigger\` - The button that toggles the select

\`Select.Value\` - The value of the select

\`Select.Icon\` - The icon of the select

\`Select.Portal\` - The container that holds the Content

\`Select.Content\` - The content that pops out when select is open

\`Select.Viewport\` - The scrolling viewport that holds the items

\`Select.Item\` - The item that can be selected

\`Select.ItemText\` - The text of the item

\`Select.ItemIndicator\` - The indicator of the item

\`Select.Separator\` - The separator of the items

## API Reference:
### Root
Props

\`value: string\` - The value of the select

\`onValueChange: (value: string) => void\` - callback for value change

\`open: boolean\` - controlled open state of the select

\`onOpenChange: (open: boolean) => void\` - callback for open state change

\`disabled: boolean\` - disabled state of the select

\`name: string\` - name of the select

### Trigger
Props

\`asChild: boolean\`: merging props and behaviour of the child component

Data Attribute

\`[data-state]: 'open' | 'closed'\`

\`[data-disabled]\`

\`[data-placeholder]\`

### Value
Props

\`placeholder: ReactNode\` - The placeholder of the value

### Content
Props

\`position: 'popper' | 'item-aligned'\` - The position of the content

\`side: 'top' | 'bottom' | 'left' | 'right'\` - The side of the content

\`sideOffset: number\` - distance in px from the trigger

\`align: 'start' | 'center' | 'end'\` - The alignment of the content

'color: 'sf-green' | 'succession-blue'\` - The color of the styling

Data Attribute

\`[data-side]: 'top' | 'bottom' | 'left' | 'right'\` - The side of the content

\`[data-state]: 'open' | 'closed'\`

\`[data-align]: 'start' | 'center' | 'end'\`

Item
Props

\`value: string\` - The value of the item

\`textValue: string\` - The text value of the item

\`disabled: boolean\`

Data Attribute

\`[data-state]: 'checked' | 'unchecked'\`

\`[data-disabled]\`

\`[data-highlighted]\``}}}},S=["Option 1","Option 2","Option 3","Option 4","Option 5"],f=["Option 1","Option 2","Option 3","Option 4","Option 5","Option 6","Option 7","Option 8","Option 9","Option 10","Option 11","Option 12","Option 13","Option 14","Option 15","Option 16","Option 17","Option 18","Option 19","Option 20","Option 21","Option 22","Option 23","Option 24","Option 25","Option 26","Option 27","Option 28","Option 29","Option 30"],l={render:o=>e.jsxs(t.Root,{...o,children:[e.jsxs(t.Trigger,{className:"max-w-80 w-full",color:o.color,children:[e.jsx("div",{className:"flex flex-row items-center gap-2",children:e.jsx(t.Value,{placeholder:"Select team member"})}),e.jsx(t.Icon,{children:e.jsx(h,{size:20})})]}),e.jsx(t.Portal,{children:e.jsx(t.Content,{position:"popper",className:"overflow-hidden",children:e.jsx(t.Viewport,{children:S.map((r,n)=>e.jsx(t.Item,{value:n.toString(),children:e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(x,{size:20}),e.jsx(t.ItemText,{children:r})]})},n))})})})]})},a={render:o=>e.jsxs(t.Root,{...o,children:[e.jsxs(t.Trigger,{className:"max-w-80 w-full",children:[e.jsx("div",{className:"flex flex-row items-center gap-2",children:e.jsx(t.Value,{placeholder:"Select team member"})}),e.jsx(t.Icon,{children:e.jsx(h,{size:20})})]}),e.jsx(t.Portal,{children:e.jsx(t.Content,{position:"popper",className:" overflow-hidden",children:e.jsx(t.Viewport,{className:"max-h-[inherit] overflow-y-auto",children:f.map((r,n)=>e.jsx(t.Item,{value:n.toString(),children:e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(x,{size:20}),e.jsx(t.ItemText,{children:r})]})},n))})})})]})};var i,s,c;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Select.Root {...args}>
            <Select.Trigger className='max-w-80 w-full' color={args.color}>
                <div className='flex flex-row items-center gap-2'>
                    <Select.Value placeholder='Select team member' />
                </div>
                <Select.Icon>
                    <ChevronDown size={20} />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content position='popper' className='overflow-hidden'>
                    <Select.Viewport>
                        {exampleSelection.map((item, index) => <Select.Item key={index} value={index.toString()}>
                                <div className='flex items-center flex-row gap-2'>
                                    <User size={20} />
                                    <Select.ItemText>{item}</Select.ItemText>
                                </div>
                            </Select.Item>)}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
}`,...(c=(s=l.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Select.Root {...args}>
            <Select.Trigger className='max-w-80 w-full'>
                <div className='flex flex-row items-center gap-2'>
                    <Select.Value placeholder='Select team member' />
                </div>
                <Select.Icon>
                    <ChevronDown size={20} />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content position='popper' className=' overflow-hidden'>
                    <Select.Viewport className='max-h-[inherit] overflow-y-auto'>
                        {longExampleSelection.map((item, index) => <Select.Item key={index} value={index.toString()}>
                                <div className='flex items-center flex-row gap-2'>
                                    <User size={20} />
                                    <Select.ItemText>{item}</Select.ItemText>
                                </div>
                            </Select.Item>)}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const I=["Default","Scrollable"];export{l as Default,a as Scrollable,I as __namedExportsOrder,j as default};
