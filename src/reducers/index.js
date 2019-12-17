import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import addOrgReducer from './addOrgReducer'
import signInReducer from './signIn-reducer'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
  addOrgReducer,
  signInReducer
})

export default rootReducer
