import {SIGNIN_FETCH, SIGNIN_SUCCESS, SIGNIN_FAILURE} from '../actions/signinActions'

const initialState ={
    user_id: 0,
    isFetching:false,
    error:""
}

const signinReducer = (state=initialState, action) => {
    switch(action.type){
        case SIGNIN_FETCH:
            return{
                ...state,
                isFetching:true,
            }
        case SIGNIN_SUCCESS:
            return{
                id:action.payload,
                isFetching:false
            }
        case SIGNIN_FAILURE:
            return{
                error: action.payload
            }
        default:
            return state;
    }
}
export default signinReducer