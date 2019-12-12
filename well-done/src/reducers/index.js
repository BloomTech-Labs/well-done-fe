import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer  from './sensorReducer'

const rootReducer = combineReducers({
  user: userReducer,
  sensor: sensorReducer,

})

export default rootReducer
