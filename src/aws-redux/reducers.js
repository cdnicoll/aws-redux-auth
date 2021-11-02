// import { pick, omit, get, isObject } from 'lodash'
// import { setWith, assign } from 'lodash/fp'
import { actionTypes } from './constants.js'


/**
 * Reducer for auth state. Changed by `LOGIN`, `LOGOUT`, and `LOGIN_ERROR` actions.
 * @param  {object} [state={isLoaded: false}] - Current auth redux state
 * @param  {object} action - Object containing the action that was dispatched
 * @param  {string} action.type - Type of action that was dispatched
 * @returns {object} Profile state after reduction
 */
export function authReducer(
  state = { isLoaded: false, isEmpty: true },
  action
) {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      return { isLoaded: true, isEmpty: true }
    case actionTypes.LOGIN:
    case actionTypes.AUTH_RELOAD_SUCCESS:
      return { isLoaded: true, isEmpty: false, auth: action.payload }
    case actionTypes.LOGOUT:
      return { isLoaded: true, isEmpty: true }
    default:
      console.log("@DEBUG::11012021-113053", action.type)
      return state
  }
}