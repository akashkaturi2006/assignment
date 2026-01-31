import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
      page: null, 
    },
    options: {
      storySort: {
        order: ["Components", ["Button", "Card", "Input"]],
      },
    },
  },
};

export default preview;

