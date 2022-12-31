import { Checkbox as antCheckbox } from 'antd';
import styled, { css } from 'styled-components';
import colors from '@atoms/colors';

interface Props {
  size?: 'small';
  children?: string | JSX.Element;
}

const Checkbox = styled(antCheckbox) <Props>`

&.ant-checkbox-wrapper {
     font-size: 16px;
     font-weight: 400;
   .ant-checkbox-inner {
     border: 2px solid ${colors.dark_80};
     border-radius: 4px;
     width: 20px;
     height: 20px;
     :after {
       height: 12px;
       top: 45%;
     }
   }
  
  .ant-checkbox-checked {
    .ant-checkbox-inner {
       border-color: ${colors.primary_main} !important;
       background-color: ${colors.primary_main} !important;
     }
     &:hover,&:focus,&:active {
        .ant-checkbox-inner {
       border-color: ${colors.primary_main} !important;
       background-color: ${colors.primary_main};
     }
    }

    &.ant-checkbox-disabled {
     .ant-checkbox-inner {
        background-color: ${colors.light_gray} !important;
        border-color: ${colors.light_gray} !important;
        :after {
          border-color: ${colors.white};
        }
     }
   }
    
    :after {
        display: none;
    }
   }

  .ant-checkbox-disabled {
    .ant-checkbox-inner {
        background-color: transparent;
        border-color: ${colors.light_gray} !important;
    }
   }

  &.ant-checkbox-wrapper:hover .ant-checkbox-inner, 
  .ant-checkbox:hover .ant-checkbox-inner, 
  .ant-checkbox-input:focus + .ant-checkbox-inner {
     border-color: ${colors.dark_80};
  }

  .ant-checkbox + span {
    align-self: center;
  }
}

// Small
${(props) =>
    props?.size === 'small' &&
    css`
    &.ant-checkbox-wrapper {
        font-size: 14px !important;
        font-weight: 400 !important;
      .ant-checkbox-inner {
        border: 2px solid ${colors.dark_80};
        border-radius: 4px;
        width: 17px !important;
        height: 17px !important;
        :after {
         height: 11px;
         top: 45%;
         left: 19%;
     }
    }
}
`}
`;

export default Checkbox;