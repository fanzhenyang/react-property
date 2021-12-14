import * as types from '../actionTypes'
import { AnyAction } from 'redux'
import { Menu } from '@/interface/menu'
import routerPermission from '@/utils/routerPermission'
export interface IMenuState {
  menu: Menu[]
}
const initialMenuState: IMenuState = {
  menu: []
}

export function menuAction(data: Menu[]) {
  return {
    type: types.MENU_DATA,
    data
  }
}

function meunInit(state: IMenuState = initialMenuState, action: AnyAction) {
  switch (action.type) {
    case types.MENU_DATA:
      routerPermission(action.data)
      return { menu: action.data }
    default:
      return state
  }
}

export default meunInit