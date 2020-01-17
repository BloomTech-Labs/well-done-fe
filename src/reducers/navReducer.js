import { TOGGLE_NAV_STATE } from 'actions/navActions.js'

export const navReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_NAV_STATE:
      return action.payload

    default:
      return state
  }
}
 