
import { HeaderWrapper, HeaderLogo, HeaderMain, HeaderTitle, HeaderDianImg } from './headerStyle';
import LogoSrc from '@/assets/img/logo/logo.png';
import DianSrc from '@/assets/img/menu/dian.png';
import Menu from '../Menu/menu';
const Header = () => {
  return <HeaderWrapper>
    <HeaderDianImg src={DianSrc} />
    <HeaderTitle>铁路投资建设智慧管控平台</HeaderTitle>
    <HeaderMain>
      <HeaderLogo src={LogoSrc} />
      <Menu />
    </HeaderMain>
  </HeaderWrapper>
}

export default Header