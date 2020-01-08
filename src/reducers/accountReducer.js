import {ADDOP_FETCH, ADDOP_SUCCESS, ADDOP_FAILURE, EDIT_SUCCESS, ACCOUNT_SUCCESS} from '../actions/accountAction'

const initialState = {
    accounts : [],
    isFetching: false,
    error: ""
}

const accountReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDOP_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADDOP_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:'',
                accounts: action.payload
            }
        case ADDOP_FAILURE:
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
                    console.log(`e`, e)
                })
            }
        default:
            return state;
    }
}
export default accountReducer