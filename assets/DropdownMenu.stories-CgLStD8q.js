import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{D as n}from"./index-CccjctYd.js";/* empty css               */import{c as t}from"./createLucideIcon-fiZGw2_7.js";import{T as d}from"./trash-CRSrpWXq.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=t("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=t("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]),f={title:"Components/DropdownMenu",component:n.Root,parameters:{docs:{description:{component:`This story displays the \`DropdownMenu\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`DropdownMenu{ComponentName}Props\`.

## Usage:

import { DropdownMenu } from '@sf-digital-ui/react'

DropdownMenu is a composition of the following components:

\`DropdownMenu.Root\` - Contains all the dropdown menu parts

\`DropdownMenu.Trigger\` - The button that toggles the dropdown menu

\`DropdownMenu.Portal\` - The container that holds the Content

\`DropdownMenu.Content\` - The content that pops out when dropdown menu is open

\`DropdownMenu.Item\` - The item that can be selected

\`DropdownMenu.Divider\` - The divider that separates items

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

\`[data-disabled]\` - disabled state of the item`}}}},o={render:()=>e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(s,{size:20})}),e.jsx(n.Portal,{children:e.jsxs(n.Content,{children:[e.jsxs(n.Item,{children:[e.jsx(c,{size:16}),"Edit"]}),e.jsxs(n.Item,{children:[e.jsx(d,{size:16}),"Delete"]}),e.jsx(n.Divider,{}),e.jsxs(n.Item,{children:[e.jsx(p,{size:16}),"Click here to die!"]})]})})]})};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MoreVertical size={20} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Edit size={16} />
            Edit
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <Trash size={16} />
            Delete
          </DropdownMenu.Item>
          <DropdownMenu.Divider />
          <DropdownMenu.Item>
            <Skull size={16} />
            Click here to die!
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,f as default};
