import { lazy } from 'react'
import { useLocation, Route, Routes, Navigate, Location, Router, useRoutes } from 'react-router-dom';
import session from '@/utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/index';
import Layout from '@/layout/layout';
import { Menu } from '@/interface/menu';
import MenuCom from '@/components/Menu/menu';
import { commonRoters } from './commonRoters';

// 是否存在token
const tokenRouter = () => {
  const token = session.getItem('ADMIN_TOKEN')
  if (!token || token === 'undefined') {
    return <Route path="*" element={<Navigate to="/login" />} />
  }
}

const layoutRouters = (list: Menu[]) => {
  return list && list.map((el: Menu) => {
    if (el.children && el.children.length > 0) {
      layoutRouters(el.children)
    } else {
      if (el.url && el.modulePath) {
        const i = el.modulePath.indexOf('/')
        const CompsRouter = (i !== 0 ? lazy(() => import(`@/views/${el.modulePath}.tsx`)) : lazy(() => import(`@/views${el.modulePath}.tsx`)))
        return <Route path={el.url} key={el.url || '' + Math.random()} element={<CompsRouter />} />
      }
    }
  })
}

function RouterGuardsAuth() {
  const location = useLocation()
  // 获取后端返回的路由
  const { menuRouter } = useSelector((state: RootState) => state.menuReducer)
  console.log('%c 🍡 menuRouter: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', menuRouter);


  return <Routes>
    {
      // 登录以及一些不存在layout下的一些路由
      commonRoters.map(el => {
        return <Route path={el.path} element={<el.element />} key={el.path} />
      })
    }
    <Route element={<Layout />}>
      {/* <MenuCom /> */}
      {layoutRouters(menuRouter)}
    </Route>
    {tokenRouter()}
  </Routes >
}
export default RouterGuardsAuth