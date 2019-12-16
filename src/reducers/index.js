import { combineReducers } from 'redux'

import { userReducer } from './userReducer'
import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import {navReducer as nav} from './navReducer'

const rootReducer = combineReducers({
  userReducer,
  sensorReducer,
  historyReducer,
  navShow: nav
})

export default rootReducer
