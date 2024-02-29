import{j as e}from"./jsx-runtime--26OcTxz.js";import{d as r}from"./index-D-8obwC5.js";import{c as P}from"./output-pFW2mO8h.js";import{C as g}from"./chevron-down-CMemQRWy.js";import"./index-BLgStI3F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CCbyfPlC.js";import"./index-B99Sp-t6.js";/**
 * @license lucide-react v0.341.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=P("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),D={title:"Form/TextInput",component:r.Root,args:{size:"sm",disabled:!1},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}}},parameters:{docs:{description:{component:`This story displays the \`TextInput\` component, which is a React element built using Pattern Composition. Types generated for each component are exported as \`TextInput{ComponentName}Props\`.

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

\`disabled: boolean\` - Whether the input is disabled`}}}},n={args:{children:e.jsx(r.Control,{placeholder:"Placeholder"})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Prefix,{children:e.jsx(I,{})}),e.jsx(r.Control,{placeholder:"Placeholder"})]})}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Control,{placeholder:"Placeholder"}),e.jsx(r.Suffix,{children:e.jsx(g,{})})]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r.Prefix,{children:e.jsx(I,{})}),e.jsx(r.Control,{placeholder:"Placeholder"}),e.jsx(r.Suffix,{children:e.jsx(g,{})})]})}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <TextInput.Control placeholder="Placeholder" />
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        <TextInput.Prefix>
          <CircleUserRound />
        </TextInput.Prefix>
        <TextInput.Control placeholder="Placeholder" />
      </>
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,h,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <>
        <TextInput.Control placeholder="Placeholder" />
        <TextInput.Suffix>
          <ChevronDown />
        </TextInput.Suffix>
      </>
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,f,T;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <TextInput.Prefix>
          <CircleUserRound />
        </TextInput.Prefix>
        <TextInput.Control placeholder="Placeholder" />
        <TextInput.Suffix>
          <ChevronDown />
        </TextInput.Suffix>
      </>
  }
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const U=["Default","WithPrefix","WithSuffix","WithPrefixAndSuffix"];export{n as Default,t as WithPrefix,s as WithPrefixAndSuffix,o as WithSuffix,U as __namedExportsOrder,D as default};
