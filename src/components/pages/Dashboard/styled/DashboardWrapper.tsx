import styled from "styled-components";
import colors from "@atoms/colors";

const DashboardWrapper = styled('div')`
  min-height: 887px;
  background-color: ${colors.background};
  padding: 20px 40px;

  .project-title {
     h2 {
      display: inline;
     }
     p{
      display: none;
     }
  }

  .stats {
    margin-top: 35px;
    div {
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: ${colors.white};
     border-radius: 6px;
    }
    .cont1 {
       padding: 40px 0;
    }
    .cont2,.cont3 {
      padding: 20px 20px;
      cursor: pointer;
       .charX-wrapper {
         padding-top: 20px;
         width: 100%;
         height: 100%;
         canvas {
          width: 100% !important;
          height: 100% !important;
         }
       }
       .charY-wrapper {
         width: 100%;
         height: 100%;
         canvas {
          width: 100% !important;
         }
       }
    }
  }

  .ant-collapse-item-active {
    .project-title {
      p {
        display: inline;
      }
    }
  }

`;

export default DashboardWrapper;