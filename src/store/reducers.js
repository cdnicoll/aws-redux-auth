import { combineReducers } from 'redux'
import { awsReducer } from '../aws-redux'

const rootReducer = () => combineReducers({
  aws: awsReducer
})

export default rootReducer
