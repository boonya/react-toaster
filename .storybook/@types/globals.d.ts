import '@storybook/types';

type Backgrounds = {
  disable?: boolean;
  default?: string;
  values?: {name: string; value: string}[];
  grid?: Record<string, unknown> | {disable: boolean};
};

declare module '@storybook/types' {
  interface Parameters {
    style?: React.CSSProperties;
    /**
     * @see https://storybook.js.org/docs/react/configure/story-layout
     */
    layout?: 'centered' | 'fullscreen' | 'padded';
    /**
     * @see https://storybook.js.org/docs/react/essentials/backgrounds
     */
    backgrounds?: Backgrounds;
  }
}
