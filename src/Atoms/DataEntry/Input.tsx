import { ErrorSvg } from '@svgs';
import { Input as AntInput } from "antd";
import styled from "styled-components";
import colors from "@atoms/colors";

type Props = {
  suffix?: JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  status?: 'error' | 'warning';
  [key: string]: any;
};

const antInput: React.FunctionComponent<Props> = ({ ...props }) => <AntInput {...props} />;

const antTextArea = styled(AntInput.TextArea)`
    height: 87px !important;
    padding: 28px 12px 30px !important;
    border: 1px solid ${colors.gray} !important;
    border-radius: 3px !important;
    color: ${colors.dark_100};
    padding: 8px 12px;
    font-weight: 400;
    font-size: 14px;
    &:hover {
        border: 1px solid ${colors.gray};
        box-shadow: none;
    }
    &:focus {
        border: 1px solid ${colors.dark_100} !important;
        box-shadow: none;
    }
    &::placeholder {
        color: ${colors.gray};
    }
    &:disabled {
        background-color: ${colors.white};
        border: 1px solid ${colors.disabled};
        color: ${colors.disabled};
    }
`;

Input.TextArea = antTextArea;

const CustomInput = styled(antInput)`
    &.ant-input {
      height: 33px;
      border: 1px solid ${colors.gray};
      border-radius: 3px;
      color: ${colors.dark_100};
      padding: 8px 12px;
      font-weight: 400;
      font-size: 14px;
      &:hover {
        border: 1px solid ${colors.gray};
        box-shadow: none;
      }
      &:focus {
        border: 1px solid ${colors.dark_100};
        box-shadow: none;
      }
      &::placeholder {
        color: ${colors.gray};
      }
      &:disabled {
        background-color: ${colors.white};
        border: 1px solid ${colors.disabled};
        color: ${colors.disabled};
      }
    }
     
    &.ant-input-affix-wrapper-disabled {
      background-color: ${colors.white};
      border: 1px solid ${colors.disabled};
      border-radius: 3px;
      padding: 8px 12px;
    }

    &.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled){
      border: 1px solid ${colors.gray};
      box-shadow: none !important;
      border-radius: 3px;
      padding: 8px 12px;
      &:focus-within{
        border: 1px solid ${colors.dark_100};
      }
      &:hover{
        border-color: ${colors.gray};
      }
    }

    &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input{
      border: 1px solid ${colors.error};
    }

`;

export default function Input(props: Props) {
  const { suffix, placeholder, disabled, status, } = props;

  return (
    <CustomInput
      suffix={status === 'error' ? <ErrorSvg /> : suffix}
      placeholder={placeholder}
      disabled={disabled}
      status={status}
      {...props}
    />
  );
};