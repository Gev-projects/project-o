import styled from "styled-components";
import { Form as antForm } from 'antd';

const Form = styled(antForm)`
    &.ant-form-vertical .ant-form-item-label {
      padding-bottom: 4px !important;
    }
    .ant-form-item {
        margin-bottom: 18px;
    }
    
`

export default Form;