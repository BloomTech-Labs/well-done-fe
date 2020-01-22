  import  * as types from 'actions/selectedSensorsActions'
  const initialState = {
    currentlySelected: {},
    previouslySelected: {},
  }
  
  export const selectedSensorsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.HANDLE_SELECTION:
        return {
          ...state, currentlySelected: action.payload
        }
      case types.CLEAR_SELECTED:
        const wasSelected = { [state.currentlySelected.sensor_pid]: state.currentlySelected }
        return {
          currentlySelected: {},
          previouslySelected : {...state.previouslySelected, ...wasSelected}
        }
      default:
        return state
    }
  }
   
  