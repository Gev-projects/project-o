import "antd/dist/antd.css";
import { Popover } from "antd";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../Atoms/DataDisplay/Popover/styles.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Popover",
  component: Popover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: "Hover me",
  },
  argTypes: {
    title: { control: { type: "text" } },
    content: { control: { type: "text" } },
    placement: {
      options: [
        "topLeft",
        "top",
        "topRight",
        "rightTop",
        "right",
        "rightBottom",
        "bottomRight",
        "bottom",
        "bottomLeft",
        "leftBottom",
        "left",
        "leftTop",
      ],
      control: "select",
    },
    trigger: {
      options: ["hover", "click"],
      control: "radio",
    },
  },
} as ComponentMeta<typeof Popover>;

const styles = {
  paddingTop: "80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as const;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = (args) => (
  <div style={styles}>
    <Popover {...args} />
  </div>
);

export const PopoverStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
