import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Header } from './Header';
import {StoreDecorator} from "@/shared/lib/storybook/decorators/StoreDecorator";
import {StateSchema} from "@/app/providers/StoreProvider/StateSchema";

const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({} as StateSchema)]
};


// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
// More on argTypes: https://storybook.js.org/docs/api/argtypes
// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
