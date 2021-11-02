/**
 * @see https://github.com/prescottprue/react-redux-firebase/blob/master/src/helpers.js
 */
import {
  size,
  get,
} from 'lodash'

export function isEmpty(...args) {
  return !args || !args.length
    ? true
    : args.some((arg) => !(arg && size(arg)) || arg.isEmpty === true)
}

export function isLoaded(...args) {
  return !args || !args.length
    ? true
    : args.every((arg) => arg !== undefined && get(arg, 'isLoaded') !== false)
}