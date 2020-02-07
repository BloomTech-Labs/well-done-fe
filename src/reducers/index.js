import { combineReducers } from 'redux'

import sensorReducer from './sensorReducer'
import { sensorHistoryReducer } from './sensorHistoryReducer'
import { navReducer as nav } from './navReducer'
import { orgReducer } from './organizationReducer'
import pumpsReducer from './pumpReducer' //used in dropdown Accounts
import accountReducer from './accountReducer'
import userReducer from './userReducer'
import logsReducer from './logsReducer'
import { selectedSensorsReducer as selectedSensors } from './selectedSensorsReducer'
import operatorReducer from './operatorReducer'
import sensorOperAssigned from './sensorsOperatorsReducer'

const rootReducer = combineReducers({
  sensorReducer,
  historyReducer: sensorHistoryReducer,
  navShow: nav,
  pumpsReducer,
  accountReducer,
  orgReducer,
  userReducer,
  selectedSensors,
  logsReducer,
  operatorReducer,
  sensorOperAssigned,
})

export default rootReducer
