import type {Preview} from '@storybook/react';
import './styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Readme', 'Changelog', 'Toaster', '*'],
      },
    },
  },
};

export default preview;
