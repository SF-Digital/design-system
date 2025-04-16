import{j as n}from"./index-WQZq-jBe.js";import{useMDXComponents as e}from"./index-CMNp7ghJ.js";import{ae as r}from"./index-DaRGdzf_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";import"./index-CYQpqK1Q.js";import"./iframe-DFCm_iwX.js";import"../sb-preview/runtime.js";import"./index-ByRBhzfU.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function i(o){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Get Started"}),`
`,n.jsx(t.h2,{id:"get-started",children:"Get Started"}),`
`,n.jsx(t.p,{children:"How to use SF Digital in your project:"}),`
`,n.jsx(t.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"React Components"}),": ",n.jsx(t.code,{children:"npm install @sf-digital-ui/react"})]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Colors, Typography and Tokens"}),": ",n.jsx(t.code,{children:"npm install @sf-digital-ui/tokens"})]}),`
`,n.jsx(t.h2,{id:"configuration",children:"Configuration"}),`
`,n.jsx(t.h3,{id:"1-tailwind-config",children:"1. Tailwind config"}),`
`,n.jsxs(t.p,{children:["Add this to your ",n.jsx(t.code,{children:"tailwind.config.ts"})]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-import",children:`import type { Config } from 'tailwindcss'
import {
  blur,
  borderWidth,
  colors,
  dropShadow,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sf-digital-ui/tokens'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    // Insert the relative paths you wish for this config to apply to
  ],

  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      fontFamily: fonts,
      lineHeight: lineHeights,
      borderRadius: radii,
      space,
      dropShadow,
      blur,
      borderWidth,
    },
  },
  plugins: [],
}
export default config
`})}),`
`,n.jsx(t.h3,{id:"2-css-output",children:"2. CSS Output"}),`
`,n.jsx(t.p,{children:"Add this line of code to the root of your project"}),`
`,n.jsx(t.p,{children:n.jsx(t.code,{children:"import '@sf-digital-ui/react/dist/output.css'"})}),`
`,n.jsx(t.h3,{id:"3-import-the-component-you-wish-to-use",children:"3. Import the Component you wish to use"}),`
`,n.jsx(t.h3,{id:"eg",children:"E.g."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{children:`import { TextInput } from '@sf-digital-ui/react'
import { Search } from 'lucide-react'

export const YourComponent = () => {
  return (
    <TextInput.Root size="md" disabled={false}>
      <TextInput.Prefix>
        <Search />
      </TextInput.Prefix>
      <TextInput.Control placeholder="Search" />
    </TextInput.Root>
  )
}
`})})]})}function j(o={}){const{wrapper:t}={...e(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(i,{...o})}):i(o)}export{j as default};
