import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from './store/store';
import Home from './containers/home/Home';
import Login from './containers/login/LoginContainer';
import Signup from './containers/login/SignUpContainer';
import './App.css';

const App = () => (
  <Provider store = {store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
