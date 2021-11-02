/**
 * @see https://github.com/prescottprue/react-redux-firebase/blob/master/src/constants.js
 */

/**
 * @constant
 * @type {string}
 * @description Prefix for all actions within library
 * @example
 * import { constants } from 'react-redux-AWS'
 * constants.actionsPrefix === '@@reactReduxAWS' // true
 */
export const actionsPrefix = '@@reactReduxAWS'

export const actionTypes = {
  START: `${actionsPrefix}/START`,
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
  AUTH_RELOAD_SUCCESS: `${actionsPrefix}/AUTH_RELOAD_SUCCESS`,
  AUTHENTICATION_INIT_STARTED: `${actionsPrefix}/AUTHENTICATION_INIT_STARTED`,
  AUTHENTICATION_INIT_FINISHED: `${actionsPrefix}/AUTHENTICATION_INIT_FINISHED`,
}

export const hubTypes = {
  CONFIGURED: 'configured',
  SIGNIN: 'signIn',
  SIGNOUT: 'signOut'
}