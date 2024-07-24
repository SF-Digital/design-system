import { themes } from '@storybook/theming';
import type { Preview } from "@storybook/react";


const preview: Preview = {
  parameters: {
    backgrounds: {default: "light"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    }
  },

  tags: ["autodocs"]
};

export default preview;
