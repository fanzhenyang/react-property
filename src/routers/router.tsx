import { lazy } from 'react'
import { useLocation, Route, Routes, Navigate, Location } from 'react-router-dom';
import session from '@/utils/auth';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/index';
import Layout from '@/layout/layout';
import { commonRoters } from './commonRoters';

export function RouterGuardsAuth() {
  const location = useLocation()
  console.log('%c 🥞 location: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', location);
  // 获取后端返回的路由
  const { menuRouter } = useSelector((state: RootState) => state.menuReducer)

  const routerList = configRouters(menuRouter)
  return <Routes>
    {
      commonRoters.map(el => {
        if (el.hide) {
          return <Route path="*" element={<el.element />} key={el.path} />
        } else {
          return <Route path={el.path} element={<el.element />} key={el.path} />
        }
      })
    }
    {
      <Route path="/" element={<TokenRouter><Layout /></TokenRouter>}>
        {
          routerList && routerList.length > 0 && routerList.map((el, i) => {
            if (i === 0) {
              return <Route index element={<el.element />} key={el.path} />
            } else {
              return <Route path={el.path} element={<el.element />} key={el.path || Math.random() + ''} />
            }
          })
        }
      </Route>
    }


  </Routes >
}

/**
 * 获取token判断用户是否登录
 * @param param0 组件信息
 * @returns 返回一个路由或者组件
 */
const TokenRouter = ({ children }: any) => {
  const token = session.getItem('ADMIN_TOKEN')
  if (!token || token === 'undefined') {
    return <Routes><Route path="*" element={<Navigate replace to='/login' />} /></Routes>
  } else {
    return children
  }
}

/**
 * 路由的的配置相关逻辑
 * @param menuRouter 后端返回的路由
 * @returns 
 */
const configRouters = (menuRouter: any[]) => {
  if (menuRouter.length === 0) {
    return []
  }

  const list = setDeepRouters(menuRouter)
  return list
}

/**
 * 递归循环路由并返回数组
 * @param menuRouter 后端返回的路由
 * @param acc 当前定义的数组
 * @returns 然会组装好的路由
 */
const setDeepRouters = (menuRouter: any[], acc: any[] = []) => {
  menuRouter.forEach(item => {
    if ((item.url && item.modulePath) || (item.children && item.children.length > 0)) {
      if (item.url && item.modulePath) {
        const i = item.modulePath.indexOf('/')
        // if (redirect && index === 0) {
        //   Object.assign(route, { redirect: `${item.url}` })
        // }
        acc.push({
          path: `${item.url}`,
          element: i !== 0 ? lazy(() => import(`@/views/${item.modulePath}.tsx`)) : lazy(() => import(`@/views${item.modulePath}.tsx`)),
          name: item.url?.split('/')[item.url?.split('/').length - 1],
        })
      }

      if (item.children && item.children.length > 0) {
        setDeepRouters(item.children, acc)
      }
    }
  })
  return acc

}