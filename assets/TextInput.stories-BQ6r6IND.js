import{j as e}from"./index-BhYKX6Xw.js";import{e as n,d as g}from"./index-PFhv2Mnp.js";import{c as P}from"./output-xDgBNoOz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CTFRWjhe.js";import"./index-BoO70ywZ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=P("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),w={title:"Form/TextInput",component:n.Root,args:{size:"sm",disabled:!1},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},color:{options:["sf-green","succession-blue"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}}},parameters:{docs:{description:{component:`This story displays the \`TextInput\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`TextInput{ComponentName}Props\`.

## Usage:

\`\`\`import { TextInput } from '@sf-digital-ui/react'\`\`\`

TextInput is a composition of the following components:


\`TextInput.Root\` - This appears as the input itself but is rather a wrapper

\`TextInput.Control\` - The input element

\`TextInput.Prefix\` - The element that will appear on the left side of the root

\`TextInput.Suffix\` - The element that will appear on the right side of the root

## API Reference:
### TextInput.Root
Props

\`size: 'sm' | 'md' | 'lg'\` - The size of the input

\`color: 'sf-green' | 'succession-blue'\` - The color of the input

\`disabled: boolean\` - Whether the input is disabled`}}}},r={args:{children:e.jsx(n.Control,{placeholder:"Placeholder"})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Prefix,{children:e.jsx(I,{})}),e.jsx(n.Control,{placeholder:"Placeholder"})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Control,{placeholder:"Placeholder"}),e.jsx(n.Suffix,{children:e.jsx(g,{})})]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Prefix,{children:e.jsx(I,{})}),e.jsx(n.Control,{placeholder:"Placeholder"}),e.jsx(n.Suffix,{children:e.jsx(g,{})})]})}};var i,a,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <TextInput.Control placeholder='Placeholder' />
  }
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
                <TextInput.Prefix>
                    <CircleUserRound />
                </TextInput.Prefix>
                <TextInput.Control placeholder='Placeholder' />
            </>
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,u,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
                <TextInput.Control placeholder='Placeholder' />
                <TextInput.Suffix>
                    <ChevronDown />
                </TextInput.Suffix>
            </>
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,m,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <>
                <TextInput.Prefix>
                    <CircleUserRound />
                </TextInput.Prefix>
                <TextInput.Control placeholder='Placeholder' />
                <TextInput.Suffix>
                    <ChevronDown />
                </TextInput.Suffix>
            </>
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const W=["Default","WithPrefix","WithSuffix","WithPrefixAndSuffix"];export{r as Default,t as WithPrefix,s as WithPrefixAndSuffix,o as WithSuffix,W as __namedExportsOrder,w as default};
