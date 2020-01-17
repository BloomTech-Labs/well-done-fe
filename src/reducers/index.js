import { combineReducers } from 'redux'

import sensorReducer from './sensorReducer'
import { historyReducer } from './sensorHistory'
import { navReducer as nav } from './navReducer'
import { orgReducer } from './organizationReducer'
import signInReducer from './signIn-reducer'
import pumpsReducer from './pumpReducer' //used in dropdown Accounts
import accountReducer from './accountReducer'

const rootReducer = combineReducers({
  sensorReducer,
  historyReducer,
  navShow: nav,
  signInReducer,
  pumpsReducer,
  accountReducer,
  orgReducer,
 
})

export default rootReducer
