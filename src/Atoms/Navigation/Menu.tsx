import { Menu as antMenu } from 'antd';
import styled from 'styled-components';
import colors from '@atoms/colors';

const Menu = styled(antMenu)`
 &.ant-menu-inline {
    height: 100%;
    border-right: 1px solid ${colors.light_gray};
    li {
        padding-left: 10px !important;
    }
    li:first-child {
        height: 50px;
        padding-left: 20px !important; 
        cursor: pointer;  
    }
    li::after {
        display: none;
    }
 }
 &.ant-menu-inline-collapsed {
   height: 100%;
   li:first-child {
        cursor: pointer;  
    }
 }

 .ant-menu-item {
    margin: 0 !important;
    color: ${colors.dark_100} !important;
    :hover {
      .ant-menu-title-content {
        background: ${colors.background};
      }
    }
 }

 .ant-menu-title-content {
    border-radius: 8px;
    p {
        padding-left: 20px;
    }
 }

 .ant-menu-item-selected {
    .ant-menu-title-content {
        background: ${colors.tertiary};
    }
    :hover {
      .ant-menu-title-content {
        background: ${colors.tertiary};
      }
    }
    p {
        font-weight: 500;
    }
 }

 &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${colors.white};
 }
 .ant-menu-item:active {
    background-color: ${colors.white};
 }
`;

export default Menu;