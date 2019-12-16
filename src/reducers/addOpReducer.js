import {ADDOP_FETCH, ADDOP_SUCCESS, ADDOP_FAILURE} from '../actions/addOp-action'

const initialState = {
    addedOp : [],
    isFetching: false,
    error: ""
}

const addOp = (state = initialState, action) => {
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
                addedOrg: action.payload
            }
        case ADDOP_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default addOp