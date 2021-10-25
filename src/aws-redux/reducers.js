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
    default:
      return state
  }
}