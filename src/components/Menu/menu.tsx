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

  const handleClick = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    console.log('%c 🥝 domEvent: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', domEvent);
    console.log('%c 🍏 selectedKeys: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', selectedKeys);
    console.log('%c 🍢 keyPath: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', keyPath);
    console.log('%c 🍭 key: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', key);
    console.log('%c 🍐 item: ', 'font-size:20px;background-color: #FCA650;color:#fff;', item);

  }

  return <Menu mode="horizontal" onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => handleClick({ item, key, keyPath, selectedKeys, domEvent })}>
    {renderMenu(routers)}
  </Menu >
})

const handleTitle = ({ key, domEvent }: any) => {
  console.log('%c 🍤 domEvent: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', domEvent);
  console.log('%c 🥛 key: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', key);

}


const renderMenu = (list: IMenu[]) => {
  return list.map((el: IMenu) => {
    if (el.children && el.children.length > 0) {
      return <SubMenu onTitleClick={({ key, domEvent }) => handleTitle({ key, domEvent })} title={el.moduleName} key={'' + el.moduleId}>
        {renderMenu(el.children)}
      </SubMenu>
    } else {
      return <Menu.Item key={'' + el.moduleId}>{el.moduleName}</Menu.Item>
    }
  })
}
export default MenuCom
