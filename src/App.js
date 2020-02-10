import React from 'react';
import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';

import Reducer from './reducers';
import Root from './Root';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)


function App() {
  return (
    <Provider store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Router>
        <Root />
      </Router>
    </Provider>
  );
}

export default App;
