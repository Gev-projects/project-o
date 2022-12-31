import styled from "styled-components";
import { Select as Component } from 'antd';
import { forwardRef } from "react";
import colors from "../colors";

const Select = styled(
  //using forwardRef to access styles which are out of root element
    forwardRef<any, any>(({ parentContainer = true, ...props }, ref) => (
        <Component
          getPopupContainer={(triggerNode) =>
            parentContainer ? triggerNode.parentElement : document.body
          }
          {...props}
          ref={ref}
        />
      )),
)`
    .ant-select-selector {
        border-radius: 3px !important;
        border: 1px solid ${colors.gray} !important;
        box-shadow: none !important;
    }

    .ant-select-item-option {
        padding: 4px 12px !important; 
    }

    &.ant-select:not(.ant-select-disabled):hover {
      .ant-select-selector { 
        border: 1px solid ${colors.gray} !important;
        box-shadow: none !important;
      }
    }
    &.ant-select:not(.ant-select-disabled):focus {
      .ant-select-selector { 
        border: 1px solid ${colors.dark_100} !important;
        box-shadow: none !important;
      }
    }

    .ant-select-selection-item {
        color: ${colors.dark_100} !important;
    }

    .ant-select-item-option-selected {
        background-color: ${colors.light_gray} !important;
    }

    .ant-select-item-option-active {
        background-color: ${colors.background}; 
    }

    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      color: ${colors.dark_100} !important;
    }

`

export default Select;