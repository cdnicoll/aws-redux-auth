/** 
 * @see https://github.com/prescottprue/react-redux-firebase/blob/master/src/ReactReduxFirebaseProvider.js
 */
import React from 'react'
import PropTypes from 'prop-types'
import ReactReduxAwsContext from './ReactReduxAwsContext'
import Amplify from "aws-amplify";
import { createAwsInstance } from './awsInstance';

const ReactReduxAwsProvider = (props = {}) => {
  const {
    children,
    awsConfig,
    dispatch
  } = props

  createAwsInstance(dispatch)
  Amplify.configure(awsConfig);

  return (
    <ReactReduxAwsContext.Provider value={{foo: 'bar'}}>
      {children}
    </ReactReduxAwsContext.Provider>
  )
}

ReactReduxAwsProvider.defaultProps = {
}

ReactReduxAwsProvider.propTypes = {
  children: PropTypes.node,
}

export default ReactReduxAwsProvider