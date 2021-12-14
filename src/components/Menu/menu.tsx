import { init } from '@/api/menu/menu'
import { useEffect, useState, useCallback, memo } from 'react'
import { Menu as IMenu } from '@/interface/menu'
import { menuAction } from '@/redux/reducers/menuReducer'
import { useDispatch } from 'react-redux'
import { Menu } from 'antd'
const { SubMenu } = Menu
const MenuCom = memo(() => {
  const dispatch = useDispatch()
  const [routers, setRouters] = useState<IMenu[]>([])
  const routerAsync = useCallback(async () => {
    const { data } = await init({ clientIds: 'cdtye-common-sys-client' })
    setRouters(data[0].menus)
    dispatch(menuAction(data[0].menus))
  }, [])


  useEffect(() => {
    routerAsync()
  }, [])
  return <Menu mode="horizontal">
    {
      routers.map((router: IMenu) => {
        console.log('%c 🍎 router: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', router);
        if (router.children && router.children.length > 0) {
          return <SubMenu key={'sub' + router.moduleId} title={router.moduleName}>
            <MenuChild list={router.children} key={'sub' + Math.random()} />
          </SubMenu>
        } else {
          return <Menu.Item eventKey={'sub-item' + router.moduleId}>
            {router.moduleName}
          </Menu.Item>
        }
      })
    }
  </Menu >
})

const Tmp = memo((props: any) => <>{props.children}</>);

const MenuChild = memo((props: { list: IMenu[] }) => {
  return <>
    {
      props.list.map((el: IMenu) => {
        console.log('%c 🍕 el: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', el.moduleId);
        if (el.children && el.children.length > 0) {
          return <>
            <SubMenu title={el.moduleName} key={'sub-item' + el.moduleId}>
              <MenuChild list={el.children} />
            </SubMenu>
          </>
        } else {
          return <Menu.Item eventKey={'sub-item' + el.moduleId}>{el.moduleName}</Menu.Item>
        }
      })
    }
  </>
})

export default MenuCom
