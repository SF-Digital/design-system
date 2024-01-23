import { themes } from '@storybook/theming';
import type { Preview } from "@storybook/react";


//this import breaks my build 
// import '@sf-digital-ui/react/src/index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {default: "dark"},
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    }
  },
};

export default preview;
