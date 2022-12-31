import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OctaveSvg } from '@svgs';
import { Collapse } from '@atoms';
import ProjectHeader from '@components/pages/Dashboard/_partials/ProjectHeader';
import ProjectContent from '@components/pages/Dashboard/_partials/ProjectContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/Collapse',
    component: Collapse,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        expandIcon: () => <OctaveSvg />,
        bordered: false,
        children: <CollapsePanel header={<ProjectHeader name='Octave' />} children={<ProjectContent />} key='1' />
    },
    argTypes: {
        bordered: { control: { type: 'boolean' } },
    },
} as ComponentMeta<typeof Collapse>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapse> = (args) => <Collapse {...args} />;

export const CollapseStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args