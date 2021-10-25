// https://github.com/prescottprue/react-redux-firebase/blob/master/src/constants.js

/**
 * @constant
 * @type {string}
 * @description Prefix for all actions within library
 * @example
 * import { constants } from 'react-redux-AWS'
 * constants.actionsPrefix === '@@reactReduxAWS' // true
 */
export const actionsPrefix = '@@reactReduxAWS'

/**
 * @constant
 * @type {object}
 * @description Object containing all action types
 * @property {string} START - `@@reactReduxFirebase/START`
 * @property {string} LOGIN - `@@reactReduxFirebase/LOGIN`
 * @property {string} LOGOUT - `@@reactReduxFirebase/LOGOUT`
 * @property {string} LOGIN_ERROR - `@@reactReduxFirebase/LOGIN_ERROR`

 * @example
 * import { actionTypes } from 'react-redux-firebase'
 * actionTypes.SET === '@@reactReduxFirebase/SET' // true
 */
export const actionTypes = {
  START: `${actionsPrefix}/START`,
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
}