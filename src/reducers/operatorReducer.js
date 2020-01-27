import {ADDOPERATOR_FETCH, ADDOPERATOR_SUCCESS, ADDOPERATOR_FAILURE, ADDACCOUNT_FETCH, ADDACCOUNT_FAILURE} from '../actions/accountAction'

const initialState = {
    operators:[],
    isFetching:false,
    error:''
}

const operatorReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDACCOUNT_FETCH:
            return {
                ...state,
                isFetching:true,
                error:''
            }
        case ADDOPERATOR_SUCCESS:
            return {
                ...state,
                isFetching:false,
                error:'',
                operators:action.payload
            }
        case ADDACCOUNT_FAILURE:
            return {
                ...state,
                isFetching:false,
                error:action.payload
            }
    }
}