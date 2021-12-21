import styled from 'styled-components';
import NavTop from '@/assets/img/menu/nav_top.png';

export const HeaderWrapper = styled.header`
  position: relative;
  background: #0b184b url(${NavTop}) no-repeat center center;
  background-size: 100% 100%;
  min-height: 8.5vh;
  width: 100%;
  color: #fff;
`

export const HeaderTitle = styled.h1`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2vw;
  left: 48.5%;
  color: #fff;
`

export const HeaderDianImg = styled.img`
  position: absolute;
  left: 64vw;
  width: 4vw;
`

export const HeaderLogo = styled.img`
  width: 18vw;
`

export const HeaderMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 100%;
  min-height: 8.1vh;
  padding: 0 1rem 1rem 1rem;
  box-sizing: border-box;
`