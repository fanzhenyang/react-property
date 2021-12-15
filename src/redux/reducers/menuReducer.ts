import * as types from '../actionTypes'
import { AnyAction } from 'redux'
import { Menu } from '@/interface/menu'
import routerPermission from '@/utils/routerPermission'
export interface IMenuState {
  menu: Menu[],
  // menuRouter: any
}
const initialMenuState: IMenuState = {
  menu: [],
  // menuRouter: []
}

export function menuAction(data: Menu[]) {
  return {
    type: types.MENU_DATA,
    data
  }
}

async function meunInit(state: IMenuState = initialMenuState, action: AnyAction) {
  switch (action.type) {
    case types.MENU_DATA:
      const list = await routerPermission(action.data)
      console.log('%c 🥧 list: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', list);
      return { menu: action.data, menuRouter: list }
    default:
      return state
  }
}

export default meunInit