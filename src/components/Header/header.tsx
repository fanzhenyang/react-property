
import { HeaderWrapper, HeaderLogo, HeaderMain, HeaderTitle, HeaderDianImg, HeaderRight, HeaderUser, HeaderUserName } from './headerStyle';
import LogoSrc from '@/assets/img/logo/logo.png';
import DianSrc from '@/assets/img/menu/dian.png';
import { Menu as MenuAntd, Dropdown } from 'antd';
import Menu from '../Menu/menu';
import { Link } from 'react-router-dom';
const Header = () => {
  return <HeaderWrapper>
    <HeaderDianImg src={DianSrc} />
    <HeaderTitle>铁路投资建设智慧管控平台</HeaderTitle>
    <HeaderMain>
      <HeaderLogo src={LogoSrc} />
      <Menu />
      <HeaderRight>
        <Link to="/">返回首页</Link>
        <HeaderUser>
          <Dropdown overlay={menu} placement="bottomCenter">
            <HeaderUserName >admin</HeaderUserName>
          </Dropdown>
        </HeaderUser>
      </HeaderRight>
    </HeaderMain>
  </HeaderWrapper>
}

const menu = (
  <MenuAntd>
    <MenuAntd.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        修改密码
      </a>
    </MenuAntd.Item>
    <MenuAntd.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        退出登录
      </a>
    </MenuAntd.Item>
  </MenuAntd>
);

export default Header