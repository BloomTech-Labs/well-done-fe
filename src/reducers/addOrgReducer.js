import {ADDORG_FETCH, ADDORG_SUCCESS, ADDORG_FAILURE} from '../actions/addOrg-action'

const initialState = {
    addedOrg : [],
    isFetching: false,
    error: ""
}

const addOrg = (state = initialState, action) => {
    switch (action.type){
        case ADDORG_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADDORG_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:'',
                addedOrg: action.payload
            }
        case ADDORG_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default addOrg