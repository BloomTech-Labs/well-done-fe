import { combineReducers } from 'redux'

import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import signInReducer from './signIn-reducer'

const rootReducer = combineReducers({
  sensorReducer,
  historyReducer,
  signInReducer,
})

export default rootReducer
