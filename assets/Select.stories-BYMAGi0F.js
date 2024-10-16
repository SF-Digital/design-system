import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as t}from"./index-DUZlCgo4.js";/* empty css               */import{C as m}from"./chevron-down-BFQNUZsI.js";import{c as i}from"./createLucideIcon-fiZGw2_7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=i("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=i("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),v={title:"Form/Select",component:t.Root,args:{},argTypes:{},parameters:{docs:{description:{component:`This story displays the \`Select\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Select{ComponentName}Props\`.

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

\`[data-highlighted]\``}}}},l={render:r=>e.jsxs(t.Root,{...r,children:[e.jsxs(t.Trigger,{className:"max-w-80 w-full",children:[e.jsx("div",{className:"flex flex-row items-center gap-2",children:e.jsx(t.Value,{placeholder:"Select team member"})}),e.jsx(t.Icon,{children:e.jsx(m,{size:20})})]}),e.jsx(t.Portal,{children:e.jsx(t.Content,{position:"popper",className:"overflow-hidden",children:e.jsxs(t.Viewport,{children:[e.jsxs(t.Item,{className:"w-80",value:"1",children:[e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(s,{size:20}),e.jsx(t.ItemText,{children:"Option 1"})]}),e.jsx(t.ItemIndicator,{children:e.jsx(n,{size:20})})]}),e.jsxs(t.Item,{className:"w-80",value:"2",children:[e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(s,{size:20}),e.jsx(t.ItemText,{children:"Option 2"})]}),e.jsx(t.ItemIndicator,{children:e.jsx(n,{size:20})})]}),e.jsxs(t.Item,{className:"w-80",value:"3",children:[e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(s,{size:20}),e.jsx(t.ItemText,{children:"Option 3"})]}),e.jsx(t.ItemIndicator,{children:e.jsx(n,{size:20})})]}),e.jsxs(t.Item,{className:"w-80",value:"4",children:[e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(s,{size:20}),e.jsx(t.ItemText,{children:"Option 4"})]}),e.jsx(t.ItemIndicator,{children:e.jsx(n,{size:20})})]}),e.jsxs(t.Item,{className:"w-80",value:"5",children:[e.jsxs("div",{className:"flex items-center flex-row gap-2",children:[e.jsx(s,{size:20}),e.jsx(t.ItemText,{children:"Option 5"})]}),e.jsx(t.ItemIndicator,{children:e.jsx(n,{size:20})})]})]})})})]})};var a,c,o;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Select.Root {...args}>
      <Select.Trigger className="max-w-80 w-full">
        <div className="flex flex-row items-center gap-2">
          <Select.Value placeholder="Select team member" />
        </div>
        <Select.Icon>
          <ChevronDown size={20} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content position="popper" className="overflow-hidden">
          <Select.Viewport>
            <Select.Item className="w-80" value="1">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 1</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="2">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 2</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="3">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 3</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="4">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 4</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item className="w-80" value="5">
              <div className="flex items-center flex-row gap-2">
                <User size={20} />
                <Select.ItemText>Option 5</Select.ItemText>
              </div>
              <Select.ItemIndicator>
                <Check size={20} />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
}`,...(o=(c=l.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const u=["Default"];export{l as Default,u as __namedExportsOrder,v as default};
