import { init } from '@/api/menu/menu'
import { useEffect, useState } from 'react'
import { Menu as IMenu } from '@/interface/menu'
import roterPermission from '@/utils/routerPermission'
import { Menu } from 'antd'
const { SubMenu } = Menu
function MenuFunc() {
  const [routers, setRouters] = useState<IMenu[]>([])
  const routerAsync = async () => {
    const { data } = await init({ clientIds: 'cdtye-common-sys-client' })
    const list = await roterPermission(data[0].menus)
    console.log('%c 🌮 list: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', list);
    setRouters(list)
    console.log('%c 🍝 routers: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', routers);
  }
  useEffect(() => {
    routerAsync()
  }, [])

  return <Menu mode="horizontal">
    {
      routers.map((router: IMenu) => {
        if (router.children && router.children.length > 0) {
          return <SubMenu key={router.meta?.moduleId + ''} title={router.meta?.moduleName}>
            <MenuChild list={router.children} />
          </SubMenu>
        } else {
          return <Menu.Item key={router.moduleId + ''}>
            {router.meta?.moduleName}
          </Menu.Item>
        }
      })
    }
  </Menu >
}

const MenuChild = (props: { list: IMenu[] }) => {
  return <>
    {
      props.list.map((el: IMenu) => {
        if (el.children && el.children.length > 0) {
          return <SubMenu key={el.meta?.moduleId + ''} title={el.meta?.moduleName}>
            <MenuChild list={el.children} />
          </SubMenu>
        } else {
          return <Menu.Item key={el.meta?.moduleId + ''}>{el.meta?.moduleName}</Menu.Item>
        }
      })
    }
  </>
}

export default MenuFunc