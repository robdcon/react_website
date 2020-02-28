import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


// Create store
const store = createStore(
  // rootReducer
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(

  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
