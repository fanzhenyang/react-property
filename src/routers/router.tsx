import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import { Menu } from '@/interface/menu'
import routersMap from './routerMap';
import session from '@/utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/index'
// import NProgress from 'nprogress';
// NProgress.configure({ showSpinner: false });

function RouterGuardsAuth() {
  const { menuRouter } = useSelector((state: RootState) => ({ menuRouter: state.menuReducer.menuRouter }))
  console.log('%c 🥝 menuRouter: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', menuRouter);
  // const location = useLocation()
  const token = session.getItem('ADMIN_TOKEN')

  const isToKenCom = () => {
    if (!token) {
      return <Route path="*"
        element={<Navigate to="/login" />}
      />
    }
  }
  return <Routes>
    {deepRoute(routersMap)}
    {isToKenCom()}
  </Routes>
}

const deepRoute = (list: any) => {
  // console.log('%c 🍇 list: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', list);
  return list.map((el: any) => {
    // debugger
    if (el.children && el.children.length > 0) {
      deepRoute(el.children)
    } else {
      return <Route path={el.path} key={'router' + Math.random()} element={<el.element />} />
    }
  })
}

export default RouterGuardsAuth