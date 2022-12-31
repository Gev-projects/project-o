import "antd/dist/antd.css";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '@atoms';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    value: '',
    disabled: false,
  },
  argTypes: {
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    status: {
      options: ['error', 'warning', '---'],
      control: 'select',
    }
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args