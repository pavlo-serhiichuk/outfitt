import type { Preview } from '@storybook/react-webpack5'
import {RouterDecorator} from "@/shared/lib/storybook/decorators/RouterDecorator";
import {ThemeDecorator} from "@/shared/lib/storybook/decorators/ThemeDecorator";
import '../../src/app/style/style.scss'

const preview: Preview = {
  decorators: [RouterDecorator, ThemeDecorator('light')],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;