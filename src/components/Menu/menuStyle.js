import styled from 'styled-components';
import MenuBgLeft from '@/assets/img/menu/menu_bg_left.png'
import { Menu } from 'antd'
export const MenuWrapper = styled(Menu)`
  position: relative;
  background: transparent;
  border: none;
  color: #fff;
  .ant-menu-item,
  .ant-menu-submenu {
    position: relative;
    background: url(${MenuBgLeft}) no-repeat center
        center;
      width: 8vw;
      height: 3.5vh;
      background-size: 100% 100%;
      background-color: transparent !important;
  }
`