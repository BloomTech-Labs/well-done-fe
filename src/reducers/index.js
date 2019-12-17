import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import addOrgReducer from './addOrgReducer'
import pumpsReducer from './pumpReducer'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
  addOrgReducer,
  pumpsReducer
})

export default rootReducer
