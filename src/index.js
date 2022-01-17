import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

// import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./sagas/rootSaga";
import reducers from "./reducers";

// //Gọi reducers
// import reducers from "./reducers/index";
// //Tạo store
// const store = createStore(reducers);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
// sagaMiddleware.run(helloSaga)

// const middleware = [sagaMiddleware];

// const store = compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )(createStore)(reducers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
