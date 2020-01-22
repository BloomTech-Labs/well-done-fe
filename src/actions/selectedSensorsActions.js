export const HANDLE_SELECTION = 'HANDLE_SELECTION'
export const CLEAR_SELECTED = 'CLEAR_SELECTED'
export const handleSelected = (sensor) => dispatch => {
    dispatch({type: HANDLE_SELECTION, payload: sensor})
}