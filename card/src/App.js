import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/home';
import Dashboard from './containers/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
      </div>
    );
  }
}

export default App;