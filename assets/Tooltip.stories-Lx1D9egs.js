import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{e,T as i}from"./index-CXNXgn4e.js";/* empty css               */import{c as m}from"./createLucideIcon-fiZGw2_7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B8XB3FuZ.js";/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=m("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),v={title:"Components/Tooltip",component:e.Provider,args:{theme:"light",side:"top"},argTypes:{theme:{control:{type:"inline-radio"},options:["light","dark"]},side:{control:{type:"inline-radio"},options:["top","bottom","left","right"]}},parameters:{docs:{description:{component:`This story displays the \`Tooltip\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`Tooltip{ComponentName}Props\`.

## Usage:

\`\`\`import { Tooltip } from '@sf-digital-ui/react'\`\`\`

Tooltip is a composition of the following components:

\`Tooltip.Provider\` - Wraps your app to provide global functionality to your tooltips

\`Tooltip.Root\` - Contains all the tooltip parts

\`Tooltip.Trigger\` - The toggle button that activates the Content

\`Tooltip.Portal\` - The container that holds the Content

\`Tooltip.Content\` - The content that pops out when tooltip is open

\`Tooltip.Arrow\` - The arrow that points to the trigger

## API Reference:
### Provider
Props

\`delayDuration: number\` - The delay duration of the content

\`skipDelayDuration: number\` - The skip delay duration of the content

\`disableHoverableContent: boolean\` - Prevents content from remaining open when hovering

### Root
Props

\`defaultOpen: boolean\` - initial rendered open state of the tooltip

\`open: boolean\` - controlled open state of the tooltip

\`onOpenChange: (open: boolean) => void\` - callback for open state change

### Trigger
Props

\`asChild: boolean\`: merging props and behaviour of the child component

Data Attribute

\`[data-state]: 'closed' | 'delayed-open' | 'instant-open'\`

### Portal
Props

\`forceMount: boolean\` - when more control is needed, useful for animation controlling

### Content
Props

\`side: 'top' | 'bottom' | 'left' | 'right'\` - The side of the tooltip

\`sideOffset: number\` - distance in px from the trigger

Data Attribute

\`[data-side]: 'top' | 'bottom' | 'left' | 'right'\` - The side of the tooltip
\`[data-state]: 'closed' | 'delayed-open' | 'instant-open'\`
\`[data-align]: 'start' | 'center' | 'end'\`

### Arrow
Props

\`width: number\` - The width of the arrow
\`height: number\` - The height of the arrow`}}}},n={render:o=>t.jsx(e.Provider,{children:t.jsxs(e.Root,{children:[t.jsx(e.Trigger,{children:t.jsx("button",{children:t.jsx(h,{style:{color:"#676767"}})})}),t.jsx(e.Portal,{children:t.jsxs(e.Content,{...o,children:[t.jsx(e.Arrow,{style:{fill:o.theme==="dark"?"black":"white"}}),t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx(i,{className:"text-sf-xs font-semibold text-neutral-600",children:"This is a tooltip"}),t.jsx(i,{className:"text-sf-xs font-regular text-neutral-400",children:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."})]})]})})]})}),decorators:[o=>t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f5f5f5"},children:o()})]},r={render:o=>t.jsx(e.Provider,{children:t.jsxs(e.Root,{children:[t.jsx(e.Trigger,{children:t.jsx("button",{children:t.jsx(h,{style:{color:"#98A2B3"}})})}),t.jsx(e.Portal,{children:t.jsxs(e.Content,{...o,children:[t.jsx(e.Arrow,{style:{fill:o.theme==="dark"?"black":"white"}}),t.jsx(i,{className:"text-sf-xs font-semibold",children:"This is a tooltip"})]})})]})}),decorators:[o=>t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f5f5f5"},children:o()})]};var l,s,a;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button>
            <HelpCircle style={{
            color: '#676767'
          }} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content {...args}>
            <Tooltip.Arrow style={{
            fill: args.theme === 'dark' ? 'black' : 'white'
          }} />
            <div className="flex flex-col gap-2">
              <Text className="text-sf-xs font-semibold text-neutral-600">
                This is a tooltip
              </Text>
              <Text className="text-sf-xs font-regular text-neutral-400">
                Tooltips are used to describe or identify an element. In most
                scenarios, tooltips help the user understand the meaning,
                function or alt-text of an element.
              </Text>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>,
  decorators: [Story => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  }}>
        {Story()}
      </div>]
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,d,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <button>
            <HelpCircle style={{
            color: '#98A2B3'
          }} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content {...args}>
            <Tooltip.Arrow style={{
            fill: args.theme === 'dark' ? 'black' : 'white'
          }} />
            <Text className="text-sf-xs font-semibold">This is a tooltip</Text>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>,
  decorators: [Story => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  }}>
        {Story()}
      </div>]
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const C=["Large","Small"];export{n as Large,r as Small,C as __namedExportsOrder,v as default};
