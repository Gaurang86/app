import { combineReducers } from 'redux'
import { singReducer } from './Registration/reducer'
import { loginReducer } from './Login/reducer'

export const rootReducer = combineReducers({ singReducer, loginReducer })
