import { Radio as antRadio } from 'antd';
import styled, { css } from 'styled-components';
import colors from '@atoms/colors';

interface Props {
  size?: 'small';
  value: string;
  children?: string | JSX.Element;
}

const Radio = styled(antRadio) <Props>`
  &.ant-radio-wrapper {
    font-size: 16px;
    font-weight: 400;
    margin-right: 0;
    .ant-radio-inner {
       width: 20px;
       height: 20px;
     }

     span.ant-radio + span {
      padding-left: 4px;
      padding-right: 10px;
     }
     
  .ant-radio-checked {
     .ant-radio-inner {
       border: 2px solid ${colors.primary_main} !important;
     }
     &.ant-radio-disabled {
     .ant-radio-inner {
        border-color: ${colors.light_gray} !important;
        ::after {
          background-color: ${colors.light_gray};
        }
      }
    }
  }

  .ant-radio:hover 
  .ant-radio-inner, 
  .ant-radio-input:focus + 
  .ant-radio-inner {
    border-color: ${colors.dark_80};
  }
  .ant-radio-inner::after {
     background-color: ${colors.primary_main};
  }

  .ant-radio-input:focus + .ant-radio-inner{
     box-shadow: none !important;
  }

  .ant-radio-inner {
     border: 2px solid ${colors.dark_80};
  }

  .ant-radio-checked::after {
     border-color: ${colors.primary_main}; 
  }

 .ant-radio-disabled {
   .ant-radio-inner {
      background-color: transparent;
      border-color: ${colors.light_gray} !important;
   }
  }
}
// Small
${(props) =>
    props?.size === 'small' &&
    css`
    &.ant-radio-wrapper {
        font-size: 14px !important;
        font-weight: 400 !important;
      .ant-radio-inner {
        width: 16px !important;
        height: 16px !important;
      }
`}
`;

export default Radio;