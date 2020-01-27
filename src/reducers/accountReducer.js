import {ADDACCOUNT_FETCH, ADDACCOUNT_SUCCESS, ADDACCOUNT_FAILURE, EDIT_SUCCESS, ACCOUNT_SUCCESS, DELETE_SUCCESS, DELETE_FAILURE} from '../actions/accountAction'

const initialState = {
    accounts : [],
    isFetching: false,
    error: ""
}

const accountReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDACCOUNT_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADDACCOUNT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:'',
                //add to array of accounts 
                accounts: [...state.accounts, action.payload]
            }
        case ADDACCOUNT_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case ACCOUNT_SUCCESS:
            return{
                ...state,
                accounts: action.payload
            }

        case EDIT_SUCCESS:
            return{
                ...state,
                isFetching:false,
                accounts: state.accounts.map(e => {
                    if(e.id === action.payload.id){
                        return e=action.payload
                    }else{
                        return e
                    }
                })
            }

            case DELETE_SUCCESS:
                return{
                    ...state,
                    isFetching:false,
                    accounts: state.accounts.filter(e => {
                        if(e.id !== action.payload.id){
                            return e
                        }
                    })
                }
            
        default:
            return state;
    }
}
export default accountReducer