// 引入react需要用的
import { useEffect, useState, memo, useCallback } from 'react';
// 引入api
import { init } from '@/api/menu/menu';
// 引入类型声明
import { Menu as IMenu } from '@/interface/menu';
// 引入组件
import { MenuWrapper } from './menuStyle';
// 导入redux
import { useDispatch } from 'react-redux';
import { menuAction } from '@/redux/reducers/menuReducer';
// 导入路由组件
import { useNavigate } from 'react-router-dom';
// 导入antd组件
import { Menu } from 'antd';
const { SubMenu } = Menu;
const RenderMenu = memo(() => {
  const [menu, setMenu] = useState<IMenu[]>([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    (async function () {
      const { data } = await init({ clientIds: 'cdtye-common-sys-client' })
      console.log('%c 🍲 data: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', data);
      dispatch(menuAction(data[0]?.menus))
      console.log('%c 🍋 data[0].menus: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', data[0].menus)
      setMenu(data[0]?.menus)
    })()
  }, [])

  // 递归
  const menuChild = useCallback((list: IMenu[]) => {
    return list.map((el: IMenu) => {
      if (el.children && el.children.length > 0) {
        return <SubMenu onTitleClick={() => handleSubMenu(el)} title={el.moduleName} key={'' + el.moduleId}>
          {menuChild(el.children)}
        </SubMenu>
      } else {
        return <Menu.Item key={'' + el.moduleId}>{el.moduleName}</Menu.Item>
      }
    })
  }, [])

  const handleSubMenu = (el: IMenu) => {
    el.url && navigate(el.url)
  }

  const handleClick = ({ item, key, keyPath, domEvent }: any) => {
    console.log('%c 🍯 key: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', key);
    // const {}
  }

  return <MenuWrapper mode="horizontal" onSelect={handleClick}>
    {menuChild(menu)}
  </MenuWrapper>
})


export default RenderMenu