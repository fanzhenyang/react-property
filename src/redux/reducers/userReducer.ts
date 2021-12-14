import * as types from '../actionTypes'
import { AnyAction } from 'redux'
import { UserData, Users } from '@/interface/user'
export interface IUserState {
  token: string
  userData: any
}
const initialUserState: IUserState = {
  token: '',
  userData: {}
}

export function userAction(data: any) {
  return {
    type: types.LOGIN_USER,
    data
  }
}

function useData(state: IUserState = initialUserState, action: AnyAction) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { token: action.data.access_token, userData: action.data.user_name }
    default:
      return state
  }
}

export default useData
