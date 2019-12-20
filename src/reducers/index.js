import { combineReducers } from 'redux'

import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import signInReducer from './signIn-reducer'
import pumpsReducer from './pumpReducer' //used in dropdown Accounts

const rootReducer = combineReducers({
  sensorReducer,
  historyReducer,
  signInReducer,
  pumpsReducer
})

export default rootReducer
