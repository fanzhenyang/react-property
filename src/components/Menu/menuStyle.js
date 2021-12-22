import styled from 'styled-components';
import MenuBgLeft from '@/assets/img/menu/menu_bg_left.png'
import MenuBgRight from '@/assets/img/menu/menu_bg_right.png'
import { Menu } from 'antd'
export const MenuWrapper = styled(Menu)`
  position: relative;
  background: transparent;
  border: none;
  color: #fff;
  margin-left: 0.9vw;
  flex: 1;
  .ant-menu-item,
  .ant-menu-submenu {
    position: relative;
    background: url(${MenuBgLeft}) no-repeat center center;
    width: 8vw;
    height: 3.5vh;
    background-size: 100% 100%;
    background-color: transparent !important;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-of-type(n + 3) {
      background: url(${MenuBgRight}) no-repeat center center;
      left: 26.5vw;
      background-size: 100% 100%;
    }
  }
  .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu:hover {
    color: #fff;
  }
  .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu:hover::after  {
    border: none;
  }
`