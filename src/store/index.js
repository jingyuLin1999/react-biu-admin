import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import immutableTransform from "redux-persist-transform-immutable";

import reducer from './reducers'
import sagas from './sagas'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)
persistStore(store);

export default store;




