import { Radio } from '@atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Radio',
    component: Radio,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        size: 'default',
        children: 'radio',
        checked: false,
        disabled: false,
    },
    argTypes: {
        size: {
            options: ['small', 'default'],
            control: 'radio'
        },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RadioStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args