import{j as n}from"./index-BhYKX6Xw.js";import{D as e}from"./index-PFhv2Mnp.js";import{c as t}from"./output-xDgBNoOz.js";import{T as s}from"./trash-59wwi9a3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CTFRWjhe.js";import"./index-BoO70ywZ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]),M={title:"Components/DropdownMenu",component:e.Root,parameters:{docs:{description:{component:`This story displays the \`DropdownMenu\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`DropdownMenu{ComponentName}Props\`.

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

\`[data-disabled]\` - disabled state of the item`}}}},o={render:()=>n.jsxs(e.Root,{children:[n.jsx(e.Trigger,{asChild:!0,children:n.jsx(d,{size:20})}),n.jsx(e.Portal,{children:n.jsxs(e.Content,{children:[n.jsxs(e.Item,{children:[n.jsx(l,{size:16}),"Edit"]}),n.jsxs(e.Item,{children:[n.jsx(s,{size:16}),"Delete"]}),n.jsx(e.Divider,{}),n.jsxs(e.Item,{children:[n.jsx(p,{size:16}),"Click here to die!"]})]})})]})};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,M as default};
