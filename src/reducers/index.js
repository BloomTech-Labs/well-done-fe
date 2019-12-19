import { combineReducers } from 'redux'

import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import addOrgReducer from './addOrgReducer'
import signInReducer from './signIn-reducer'

const rootReducer = combineReducers({
  sensorReducer,
  historyReducer,
  addOrgReducer,
  signInReducer
})

export default rootReducer
