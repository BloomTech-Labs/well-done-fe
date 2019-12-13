import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import { signInReducer } from './signInReducer'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
  signInReducer
})

export default rootReducer
