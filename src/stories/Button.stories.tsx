import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@atoms';
import { PlusCircleOutlined } from '@ant-design/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        children: 'Button',
        size: 'default',
        disabled: false,
        loading: false,
        icon: <PlusCircleOutlined />,
    },
    argTypes: {
        size: {
            options: ['small', 'default'],
            control: 'radio'
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
};
export const Icon = Template.bind({});
Icon.args = {
    type: 'icon',
    children: '',
};
export const Link = Template.bind({});
Link.args = {
    type: 'link',
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
