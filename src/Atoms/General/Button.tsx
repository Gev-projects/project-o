import { Button as AntButton } from 'antd';
import { ButtonProps, ButtonType } from 'antd/lib/button/button';
import styled, { css } from 'styled-components';
import colors from '@atoms/colors';

type A = Omit<ButtonProps, 'type'>;

type Props = A & {
  type: ButtonType | 'secondary' | 'icon';
  children?: string | JSX.Element;
  size?: 'small';
  [key: string]: any;
};

const antButton: React.FunctionComponent<Props> = ({ type, ...props }) => <AntButton {...props} />;

const Button = styled(antButton)`
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
    padding: 0 16px;
    .anticon-spin {
      svg {
        fill: white;
      }
    }

   // Primary
    ${(props) =>
    props?.type === 'primary' &&
    css`
    background: ${colors.primary_main};
    border-color: ${colors.primary_main};
    color: ${colors.white};
    border-width: 2px;
    &:hover:not(:disabled) {
      background: ${colors.primary_dark};
      color: ${colors.white};
      border-color: ${colors.primary_dark};
    }
    &:active:not(:disabled),
    &:focus:not(:disabled) { 
        border-radius: 6px;
        border-color: ${colors.dark_100};
        background: ${colors.primary_main};
        color: ${colors.white};
  }
  `}

 //disabled primary
  ${(props) =>
    props?.disabled && props?.type === 'primary' &&
    css`
    background-color: ${colors.disabled} !important;
    border-color: ${colors.disabled} !important;
    color: ${colors.white} !important;
  `}

 // Secondary
  ${(props) =>
    props?.type === 'secondary' &&
    css`
    border-color: ${colors.primary_main};
    color: ${colors.primary_main};
    &:hover:not(:disabled) {
      background-color: ${colors.tertiary};
      color: ${colors.primary_main};
      border-color: ${colors.primary_main};
    }
    &:active:not(:disabled),
    &:focus:not(:disabled) { 
        background-color: ${colors.tertiary} !important;
        border-radius: 6px;
        border-color:  ${colors.dark_100} !important;
        border-width: 2px;
        color: ${colors.primary_main} ;
        padding: 0 15px;
  }
  .anticon-spin {
      svg {
        fill: ${colors.primary_main};
      }
    }
`}

  //disabled secondary
   ${(props) =>
    props?.disabled && props?.type === 'secondary' &&
    css`
      background-color: ${colors.white} !important;
      border-color: ${colors.disabled} !important;
      color: ${colors.disabled} !important;
    `}

   // Icon
   ${(props) =>
    props?.type === 'icon' &&
    css`
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${colors.white};
      background: ${colors.primary_main};
      border-color: ${colors.primary_main};
      border-width: 2px;
      svg {
        margin: 0 !important;
      }
      &:hover:not(:disabled) {
      color: ${colors.white};
      background: ${colors.primary_dark};
      border-color: ${colors.primary_dark};
    }
    svg {
      margin: 0 !important;
    }
    &:active:not(:disabled),
    &:focus:not(:disabled) {
        color: ${colors.white};
        border-radius: 6px;
        border-color: ${colors.dark_100};
        background: ${colors.primary_main};
  }
    &.ant-btn-loading {
      background-color: ${colors.primary_main} !important;
      border-color: ${colors.primary_main} !important;
    }
    `}

   //disabled icon
   ${(props) =>
    props?.disabled && props?.type === 'icon' &&
    css`
     background-color: ${colors.disabled} !important;
     border-color: ${colors.disabled} !important;
   `}

   // Link
  ${(props) =>
    props?.type === 'link' &&
    css`
    display: inline-flex;
    align-items: center;
    height: 20px;
    padding: 0 2px;
    color: ${colors.primary_main};
    background: transparent;
    font-weight: 400;
    border-radius: 4px;
    border-color: transparent;
    svg {
      margin-right: 8px;
    }
    .anticon-spin {
       svg {
         fill: ${colors.primary_main};
       }
    }

    .anticon.anticon-spin.anticon-loading.anticon-spin,
    .anticon {
       height: 16px;
       width: 16px;
    }
    &.ant-btn span:last-child {
     height: 26px;
    }
    &:hover:not(:disabled) {
     span {
      text-decoration: underline;
     }
     color: ${colors.primary_main} !important;
     border-color: transparent !important;
     background-color: transparent !important;
     }
     &:active:not(:disabled),
     &:focus:not(:disabled) { 
       background-color: ${colors.tertiary} !important;
       border-color:  ${colors.tertiary} !important;
       color: ${colors.primary_main};
       span {
        text-decoration: none;
       }
       ::after {
         display: ${colors.primary_main};
       }
     }
  `}

  //disabled Link
  ${(props) =>
    props?.disabled && props?.type === 'link' &&
    css`
        background-color: ${colors.white} !important;
        border-color: transparent !important;
        color: ${colors.disabled} !important;
    `}
  
   //Small primary
   ${(props) =>
    props?.size === 'small' && props?.type === 'primary' &&
    css`
       display: flex;
       align-items: center;
       font-size: 14px;
       height: 32px;
       padding: 6px 12px;
    `}
  
   //Small secondary
   ${(props) =>
    props?.size === 'small' && props?.type === 'secondary' &&
    css`
       display: flex;
       align-items: center;
       font-size: 14px;
       height: 32px;
       padding: 6px 12px;
       &:active:not(:disabled),
       &:focus:not(:disabled) { 
         padding: 6px 12px;
       }
    `}

   //Small icon
   ${(props) =>
    props?.size === 'small' && props?.type === 'icon' &&
    css`
       border-radius: 6px !important;
       width: 32px !important;
       height: 32px !important;
    `}

   //Small link
   ${(props) =>
    props?.size === 'small' && props?.type === 'link' &&
    css`
       font-size: 14px;
       font-weight: 500;

       .anticon.anticon-spin.anticon-loading.anticon-spin,
       .anticon {
         height: 14px;
         width: 14px;
       }
       &.ant-btn span:last-child {
        height: 24px;
       }
   `}
`;

export default Button; 