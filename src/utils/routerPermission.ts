import routersMap from '@/routers/routerMap'
import { Menu } from '@/interface/menu'
import { lazy } from 'react';
async function routerConfig(routerList: Menu[]) {
  if (routerList.length === 0) {
    return false
  }

  routersMap.forEach(route => {
    if (route.name === 'Layout') {
      setAddRoters(routerList, route, true)
    }
  })

  const list = routersMap
  return list
}

function setAddRoters(list: Menu[], route: any, redirect = false) {
  list.forEach((item, index) => {
    if ((item.url && item.modulePath) || (item.children && item.children.length > 0)) {
      if (item.url && item.modulePath) {
        const i = item.modulePath.indexOf('/')
        if (redirect && index === 0) {
          Object.assign(route, { redirect: `${item.url}` })
        }
        route.children.push({
          path: `${item.url}`,
          element: i !== 0 ? lazy(() => import(`@/views/${item.modulePath}.tsx`)) : lazy(() => import(`@/views${item.modulePath}.tsx`)),
          name: item.url?.split('/')[item.url?.split('/').length - 1],
          meta: {

          }
        })
      }

      if (item.children && item.children.length > 0) {
        setAddRoters(item.children, route)
      }
    }
  })
}
export default routerConfig