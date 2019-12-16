import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import addOrgReducer from './addOrgReducer'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
  addOrgReducer
})

export default rootReducer
