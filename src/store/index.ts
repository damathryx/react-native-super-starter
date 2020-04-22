import AsyncStorage from '@react-native-community/async-storage';
import {
  applyMiddleware,
  compose,
  createStore,
  Reducer,
  StoreEnhancer,
  Store,
} from 'redux';
import {
  persistCombineReducers,
  persistStore,
  PersistConfig,
  Persistor,
} from 'redux-persist';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from 'store/reducers';

const isProd: boolean = !__DEV__;

// @ts-ignore
const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['session', 'lastCheckedIn'],
};

const combinedReducer: Reducer = persistCombineReducers(
  persistConfig,
  reducers,
);

const middlewareEnhancer: Function = applyMiddleware(thunk, promise);

const composedEnhancers: StoreEnhancer = (isProd
  ? compose
  : composeWithDevTools)(middlewareEnhancer);

export const store: Store = createStore(combinedReducer, composedEnhancers);

export const persistor = (callback?: () => void): Persistor =>
  persistStore(store, undefined, callback);

export default store;
