import { createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
const sagaMiddleware = createSagaMiddleware();
const storeEnhancer: StoreEnhancer = applyMiddleware(sagaMiddleware);
const storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);

const store: Store = storeEnhancerStoreCreator(reducer);
export type RootState = ReturnType<typeof store.getState>
export default store