import{j as e}from"./index-BhYKX6Xw.js";import{C as o}from"./index-PFhv2Mnp.js";import"./output-xDgBNoOz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CTFRWjhe.js";import"./index-BoO70ywZ.js";const y={title:"Form/Checkbox",component:o.Root,args:{size:"md",checked:!0,color:"sf-green"},argTypes:{color:{control:{type:"inline-radio"},options:["sf-green","succession-blue"]},size:{options:["sm","md","lg"],control:{type:"inline-radio"},checked:{control:{type:"boolean"}}}},parameters:{docs:{description:{component:`This story displays the \`Checkbox\` component, which is a React Element built using Pattern Composition.

## Usage:
\`Checkbox.Root\` - The controller of the checkbox.

\`Checkbox.Indicator\` - The element that will handle the ui feedback showing the state of the component.

\`Checkbox.Check\` - The check mark that will appear when the state is .

## API Reference:
### Root

\`size: 'sm' | 'md' | 'lg'\` - The size of the checkbox.

\`color: 'sf-green' | 'succession-blue'\` - The color of the checkbox.

\`checked: boolean\` - Whether the checkbox is checked.`}}}},c={args:{children:e.jsx(e.Fragment,{children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})})}},n={args:{children:e.jsx(e.Fragment,{children:e.jsx(o.Root,{size:"md",color:"succession-blue",children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})})})}},r={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"},children:[e.jsx(o.Root,{size:s.size,checked:s.checked,children:e.jsx(o.Indicator,{children:e.jsx(o.Check,{})})}),e.jsx("p",{className:`text-primary-green-500 text-sf-${s.size??"sm"} font-auto`,children:"Checkbox Label"})]})};var t,i,a;c.parameters={...c.parameters,docs:{...(t=c.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <>
                <Checkbox.Indicator>
                    <Checkbox.Check />
                </Checkbox.Indicator>
            </>
  }
}`,...(a=(i=c.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var h,l,d;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <>
                <Checkbox.Root size='md' color='succession-blue'>
                    <Checkbox.Indicator>
                        <Checkbox.Check />
                    </Checkbox.Indicator>
                </Checkbox.Root>
            </>
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var x,m,p;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px'
  }}>
            <Checkbox.Root size={args.size} checked={args.checked}>
                <Checkbox.Indicator>
                    <Checkbox.Check />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <p className={\`text-primary-green-500 text-sf-\${args.size ?? 'sm'} font-auto\`}>
                Checkbox Label
            </p>
        </div>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const j=["Primary","SuccessionBlue","WithLabel"];export{c as Primary,n as SuccessionBlue,r as WithLabel,j as __namedExportsOrder,y as default};
