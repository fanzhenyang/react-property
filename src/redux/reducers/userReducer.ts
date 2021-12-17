import * as types from '../actionTypes'
import { AnyAction } from 'redux'
export interface IUserState {
  token?: string
  userData?: any
  isLogin?: boolean
}
const initialUserState: IUserState = {
  token: '',
  userData: {},
  isLogin: false
}

export function userAction(payload: any) {
  return {
    type: types.LOGIN_USER,
    payload
  }
}

export function userLogin(payload: boolean) {
  return {
    type: types.IS_LOGIN,
    payload
  }
}

function useData(state: IUserState = initialUserState, action: AnyAction) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { token: action.payload.access_token, userData: action.payload.user_name }
    case types.IS_LOGIN:
      return { isLogin: action.payload }
    default:
      return state
  }
}

export default useData
