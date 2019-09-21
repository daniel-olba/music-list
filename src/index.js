import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Login from "./components/sign/Login";
import SignUp from "./components/sign/SignUp";
import Favorites from "./components/songs/Favorites";
import Song from "./components/songs/Song";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";
import reduxAxiosMiddleware from "./store/reduxAxiosMiddleware";
import {composeWithDevTools} from "redux-devtools-extension";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(reduxThunk, reduxAxiosMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/song" component={Song}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
