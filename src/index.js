import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import rootReducer from './redux/CombinedReducer';
import thunk from "redux-thunk";
let mystore = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
