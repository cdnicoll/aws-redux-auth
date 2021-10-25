import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from "aws-amplify";
import App from './App';
import createStore from './store/configureStore'
import { Provider } from 'react-redux';
import awsExports from './aws-exports'

Amplify.configure(awsExports);

const initialState = window.___INITIAL_STATE__ || {}
const store = createStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
