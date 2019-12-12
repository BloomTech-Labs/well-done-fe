import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer  from './sensorReducer'
import { historyReducer } from './sensorHistory'

const rootReducer = combineReducers({
  user: userReducer,
  sensor: sensorReducer,
  history: historyReducer

})

export default rootReducer
