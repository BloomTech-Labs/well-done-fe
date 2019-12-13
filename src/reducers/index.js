import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
})

export default rootReducer
