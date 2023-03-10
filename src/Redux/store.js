import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer)
