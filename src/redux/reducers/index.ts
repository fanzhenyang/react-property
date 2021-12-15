import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'
import menuReducer, { IMenuState } from './menuReducer'
import userReducer, { IUserState } from './userReducer'

// 合并reducers，模块化
export interface CombinedState {
  menuReducer: IMenuState,
  userReducer: IUserState
}

const reducers: ReducersMapObject<CombinedState, AnyAction> = {
  menuReducer,
  userReducer
}

const reducer: Reducer<CombinedState, AnyAction> = combineReducers(reducers)

export default reducer
