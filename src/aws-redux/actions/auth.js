/**
 * @see https://github.com/prescottprue/react-redux-firebase/blob/master/src/actions/auth.js
 */
import Auth from "@aws-amplify/auth"
import { actionTypes } from "../constants"

/**
 * Dispatch login error action
 * @param {Function} dispatch - Action dispatch function
 * @param {object} authError - Error object
 * @param {object} params - Supplement action params
 * @returns {any} Return of action dispatch
 * @private
 */
 function dispatchLoginError(dispatch, authError, params = {}) {
  return dispatch({
    type: actionTypes.LOGIN_ERROR,
    ...params,
    authError
  })
}

/**
 * @see: https://github.com/prescottprue/react-redux-firebase/blob/master/src/actions/auth.js#L478
 */
export const init = async (dispatch) => {
  // Check if auth is setup within amplify. See: https://github.com/prescottprue/react-redux-firebase/blob/master/src/actions/auth.js#L480-L482
  if (!Auth.configure().aws_cognito_identity_pool_id) {
    return;
  }

  dispatch({ type: actionTypes.AUTHENTICATION_INIT_STARTED })
  try {
    const currentAuthenticatedAwsUser = await Auth.currentAuthenticatedUser()
    dispatch({ type: actionTypes.AUTH_RELOAD_SUCCESS, payload: currentAuthenticatedAwsUser })
  } catch (error) {
    // user is not authenticated
    dispatchLoginError(dispatch, error)
  }
  dispatch({ type: actionTypes.AUTHENTICATION_INIT_FINISHED })
}

export const signIn = async (dispatch, profile) => dispatch({ type: actionTypes.LOGIN, payload: profile })
export const signOut = async (dispatch) => dispatch({ type: actionTypes.LOGOUT })