import { combineReducers } from './utils/reducers'
import {
  authReducer,
} from './reducers'


export default combineReducers({
  auth: authReducer,
})