import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/home';
import Dashboard from './containers/dashboard/dashboard';
import payment from './containers/payment/payment';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/payment" component={payment} />
      </Switch>
      </div>
    );
  }
}

export default App;