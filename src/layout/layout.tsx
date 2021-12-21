import Header from '@/components/Header/header'
import { Outlet } from 'react-router-dom'
function Layout(props: any) {
  return <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
}

export default Layout