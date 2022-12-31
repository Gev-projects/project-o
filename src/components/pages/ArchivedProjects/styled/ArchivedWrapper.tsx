import colors from "@atoms/colors";
import styled from "styled-components";

const ArchivedWrapper = styled('div')`
  min-height: 887px;
  background-color: ${colors.background};
  padding: 20px 40px;
  .ant-table-wrapper {
    th {
        padding: 8px 12px;
        background: ${colors.white};
        border-bottom: none;
        ::before {
            display: none;
        }
    }
    tr {
        td {
            padding: 12px;
            img {
                border-radius: 4px;
                margin-right: 12px;
            }
        }
        td:first-child {
            display: flex;
            align-items: center;
            svg {
                height: 34px;
                width: 34px;
                margin-right: 12px;
            }
        }
    }
    tr.ant-table-row:hover {
       td {
         background: ${colors.white};
       } 
    }
    .ant-pagination {
        display: none;
    }
 } 
`;

export default ArchivedWrapper