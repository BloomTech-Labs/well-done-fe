import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import { signinReducer } from './signinReducer'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
  signinReducer
})

export default rootReducer
