import colors from "@atoms/colors";
import styled from "styled-components";

const HeaderWrapper = styled('div')`
  height: 50px;
  background: ${colors.background};
  padding: 8px 0 12px;
  border-bottom: 1px solid ${colors.light_gray};
  .collapsed {
    padding-left: 40px;
  }
  .header-container {
    margin-right: 40px;
  }
  svg {
    margin: 0 18px;
    cursor: pointer;
  }
  .header-title-container {
    display: flex;
    align-items: center;
  }
`;

export default HeaderWrapper;