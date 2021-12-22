import styled from 'styled-components';
import Header from '@/components/Header/header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return <>
    <Header />
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  </>
}

const MainWrapper = styled.main`
  min-height: calc(100vh - 8.5vh);
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`

export default Layout