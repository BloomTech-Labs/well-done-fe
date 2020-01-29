import * as types from 'actions/orgAction'


const initialState = {
  org: [],
  isFetching: false,
  error: '',
}

export const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORG_FETCH:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case types.ORG_SUCCESS:
      return {
        ...state,
        org: action.payload,
        isFetching: false,
        error: '',
      }
    case types.ORG_ADD:
      return {
        ...state,
        org: [...state.org, action.payload],
        isFetching: false,
        error: '',
      }
    case types.ORG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
      case types.DELETE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          org: state.org.filter(e => { 
            if (e.id !== action.payload.id) {
              return e
            }
            return false
          }),
          
        }
      
        case types.APPEND_SENSORS:
      return {
        ...state,
        org:state.org.map(sOrg => {
          if(action.payload.id === sOrg.id){
            sOrg['orgSensors'] = action.payload.data
            return sOrg
          }
          return sOrg
        }),
        isFetching: false,
        error: '',
      }


      case types.APPEND_ACCOUNTS:
        return {
          ...state,
          org:state.org.map(singleOrg => {
            if(action.payload.id === singleOrg.id){
              singleOrg['orgAccounts'] = action.payload.data
              return singleOrg
            }
            return singleOrg
          }),
          isFetching: false,
          error: '',
        }
        
    default:
      return state
  }
}
