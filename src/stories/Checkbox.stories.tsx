import { Checkbox } from '@atoms';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        size: 'default',
        children: 'checkbox',
        disabled: false,
    },
    argTypes: {
        size: {
            options: ['small', 'default'],
            control: 'radio'
        },
        disabled: { control: 'boolean' },
    },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args