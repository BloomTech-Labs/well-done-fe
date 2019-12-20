import { combineReducers } from 'redux'

import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import {navReducer as nav} from './navReducer'
import signInReducer from './signIn-reducer'

const rootReducer = combineReducers({
  sensorReducer,
  historyReducer,
  navShow: nav,
  signInReducer,
})

export default rootReducer
