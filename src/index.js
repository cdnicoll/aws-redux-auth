import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from './store/configureStore'
import { Provider } from 'react-redux';
import awsExports from './aws-exports'
// import { ReactReduxAwsProvider } from './aws-redux';
import { createAwsInstance } from './aws-redux/awsInstance';

const initialState = window.___INITIAL_STATE__ || {}
const store = createStore(initialState)

// const awsReduxProps = {
//   awsConfig: awsExports,
//   dispatch: store.dispatch
// }

createAwsInstance({
  awsConfig: awsExports,
  dispatch: store.dispatch
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <ReactReduxAwsProvider {...awsReduxProps} > */}
        <App />
      {/* </ReactReduxAwsProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
