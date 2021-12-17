import * as types from '../actionTypes'
import { AnyAction } from 'redux'
import { Menu } from '@/interface/menu'

export interface IMenuState {
  menuRouter?: Menu[]
}
const initialMenuState: IMenuState = {
  menuRouter: []
}

export function menuAction(payload: Menu[]) {
  return {
    type: types.MENU_DATA,
    payload
  }
}

function meunInit(state: IMenuState = initialMenuState, action: AnyAction) {
  switch (action.type) {
    case types.MENU_DATA:
      return { menuRouter: action.payload }
    default:
      return state
  }
}

export default meunInit