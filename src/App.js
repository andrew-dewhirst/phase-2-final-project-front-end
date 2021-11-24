import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Nfl from './Nfl';
import Mlb from './Mlb';
import Nba from './Nba';
import Nhl from './Nhl';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route exact path='/nfl'>
          <Nfl />
        </Route>
        <Route exact path='/mlb'>
          <Mlb />
        </Route>
        <Route exact path='/nba'>
          <Nba />
        </Route>
        <Route exact path='/nhl'>
          <Nhl />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
