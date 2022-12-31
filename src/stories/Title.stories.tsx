import { Title } from '@atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Title',
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: 'Text',
    bold: false,
  },
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: 'radio'
    },
    bold: {
      control: 'boolean',
    }
  },
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args