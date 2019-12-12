import {SENSOR_FETCH, SENSOR_SUCCESS, SENSOR_FAILURE} from '../actions/sensorActions'

const initialState ={
    sensors: [], 
    isFetching: false, 
    error:'', 
}

const sensorReducer =( state = initialState, action) => {
    switch(action.type){
        case SENSOR_FETCH: 
        return{
            ...state, 
            isFetching: true,
            error:'',
        }
       case SENSOR_SUCCESS:
           return{
               ...state,
               isFetching:false,
               error:'',
               sensors:[action.payload]
           }
        case SENSOR_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:action.payload,
            }
        default: return state
    }
}

export default sensorReducer