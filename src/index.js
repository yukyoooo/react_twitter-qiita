import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './component/App';
import reducer from './reducers'
import reportWebVitals from './reportWebVitals';

const store = createStore(
  reducer, 
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f)
  );
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
