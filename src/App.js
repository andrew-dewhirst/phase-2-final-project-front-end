import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Nfl from './Nfl';
import Mlb from './Mlb';
import Nba from './Nba';
import Nhl from './Nhl';
import MyList from './MyList';

function App() {

  // const match=useRouteMatch();
  // console.log(match)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route exact path='/stadiums/nfl'>
          <Nfl />
        </Route>
        <Route exact path='/stadiums/mlb'>
          <Mlb />
        </Route>
        <Route exact path='/stadiums/nba'>
          <Nba />
        </Route>
        <Route exact path='/stadiums/nhl'>
          <Nhl />
        </Route>
        <Route exact path='/stadiums/mylist'>
          <MyList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
