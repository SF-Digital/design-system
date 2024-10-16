import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{D as t,T as r}from"./index-DUZlCgo4.js";/* empty css               */import{c as o}from"./createLucideIcon-fiZGw2_7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=o("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=o("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=o("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),w={title:"Components/DropdownMenu",component:t.Root,parameters:{docs:{description:{component:`This story displays the \`DropdownMenu\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`DropdownMenu{ComponentName}Props\`.

## Usage:

import { DropdownMenu } from '@sf-digital-ui/react'

DropdownMenu is a composition of the following components:

\`DropdownMenu.Root\` - Contains all the dropdown menu parts

\`DropdownMenu.Trigger\` - The button that toggles the dropdown menu

\`DropdownMenu.Portal\` - The container that holds the Content

\`DropdownMenu.Content\` - The content that pops out when dropdown menu is open

\`DropdownMenu.Item\` - The item that can be selected

## API Reference:

### Root

Props

\`open: boolean\` - controlled open state of the dropdown menu

\`onOpenChange: (open: boolean) => void\` - callback for open state change

### Trigger

Props

\`asChild: boolean\`: merging props and behaviour of the child component

Data Attribute

\`[data-state]: 'open' | 'closed'\`

### Content

Props

\`side: 'top' | 'bottom' | 'left' | 'right'\` - side of the content

\`align: 'start' | 'center' | 'end'\` - alignment of the content

Data Attribute

\`[data-side]: 'top' | 'bottom' | 'left' | 'right'\`

\`[data-align]: 'start' | 'center' | 'end'\`

\`[data-state]: 'open' | 'closed'\`

### Item

Props

\`disabled: boolean\` - disabled state of the item

\`onSelect: () => void\` - callback for item selection

Data Attribute

\`[data-highlighted]\` - highlighted state of the item

\`[data-disabled]\` - disabled state of the item`}}}},n={render:()=>e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{size:20,className:"text-neutral-700"})}),e.jsx(t.Portal,{children:e.jsxs(t.Content,{className:"bg-white rounded-md border border-neutral-10",style:{minWidth:"220px"},children:[e.jsx(t.Item,{className:" hover:bg-neutral-20 hover:outline-none rounded-t-md",style:{borderTopLeftRadius:"8px",borderTopRightRadius:"8px"},children:e.jsxs("div",{className:"flex flex-row px-4 py-3 gap-2 items-center",children:[e.jsx(l,{size:16,className:"text-neutral-700"}),e.jsx(r,{className:"text-neutral-700",children:"Edit"})]})}),e.jsx(t.Item,{className:" hover:bg-neutral-20 hover:outline-none rounded-b-md",style:{borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"},children:e.jsxs("div",{className:"flex flex-row px-4 py-3 gap-2 items-center",children:[e.jsx(p,{size:16,className:"text-neutral-700"}),e.jsx(r,{className:"text-neutral-700",children:"Delete"})]})})]})})]})};var a,s,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MoreVertical size={20} className="text-neutral-700" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white rounded-md border border-neutral-10" style={{
        minWidth: '220px'
      }}>
          <DropdownMenu.Item className=" hover:bg-neutral-20 hover:outline-none rounded-t-md" style={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}>
            <div className="flex flex-row px-4 py-3 gap-2 items-center">
              <Edit size={16} className="text-neutral-700" />
              <Text className="text-neutral-700">Edit</Text>
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Item className=" hover:bg-neutral-20 hover:outline-none rounded-b-md" style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px'
        }}>
            <div className="flex flex-row px-4 py-3 gap-2 items-center">
              <Trash size={16} className="text-neutral-700" />
              <Text className="text-neutral-700">Delete</Text>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Default"];export{n as Default,f as __namedExportsOrder,w as default};
