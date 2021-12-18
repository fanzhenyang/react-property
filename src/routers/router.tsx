import { lazy } from 'react'
import { useLocation, Route, Routes, Navigate, Location, Router, useRoutes } from 'react-router-dom';
import session from '@/utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/index';
import Layout from '@/layout/layout';

// 是否存在token
const TokenRouter = ({ children }: { children: JSX.Element }) => {
  const token = session.getItem('ADMIN_TOKEN')
  console.log('%c 🌰 token: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', token);
  if (!token || token === 'undefined') {
    return <Route path="*" element={<Navigate to="/login" />} />
  }
  console.log('%c 🎂 children: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', children);
  return children
}

// 递归循环组件
function RouterItem(props: { routerList: any[] }) {
  console.log('%c 🍢 routerList: ', 'font-size:20px;background-color: #B03734;color:#fff;', props.routerList);
  return <>
    {
      props.routerList.map(el => {
        console.log('%c 🍚 el: ', 'font-size:20px;background-color: #42b983;color:#fff;', el);
        if (el.children && el.children.length > 0) {
          <RouterItem routerList={el.children} />
        } else {
          if (el.url && el.modulePath) {
            const i = el.modulePath.indexOf('/')
            const CompsRouter = (i !== 0 ? lazy(() => import(`@/views/${el.modulePath}.tsx`)) : lazy(() => import(`@/views${el.modulePath}.tsx`)))
            return <Route path={el.url} key={el.url || '' + Math.random()} element={<CompsRouter />} />
          }
        }
      })
    }
  </>
}

export function RouterGuardsAuth() {
  const location = useLocation()
  console.log('%c 🥞 location: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', location);
  // 获取后端返回的路由
  const { menuRouter } = useSelector((state: RootState) => state.menuReducer)
  console.log('%c 🍜 menuRouter: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', menuRouter);
  return <Routes>
    <Route element={
      <TokenRouter>
        <RouterItem routerList={menuRouter} />
      </TokenRouter>
    }>
    </Route>
  </Routes >
}