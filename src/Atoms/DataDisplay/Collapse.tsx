import { Collapse as antCollapse } from "antd";
import styled from "styled-components";
import colors from '@atoms/colors';

const Collapse = styled(antCollapse)`
 background-color: ${colors.white};
 margin-top: 10px;
&.ant-collapse {
   border-radius: 6px;
   .ant-collapse-item {
     border-radius: 6px;
   }
}
 .ant-collapse-header {
    height: 46px;
    border-bottom: 1px solid ${colors.light_gray};
 }
 .ant-collapse-content-box {
    padding: 16px 16px 12px 48px !important;
 }
`

export default Collapse;