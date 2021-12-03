import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import League from './League';
import MyList from './MyList';

function App() {
  const [stadiums, setStadiums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/stadiums')
      .then((r) => r.json())
      .then((data) => {
        setStadiums(data)
      });
  }, []);

  const stadiumsToDisplay = stadiums.filter((stadium) => stadium.team_name.toUpperCase().includes(searchTerm.toUpperCase()));

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/stadiums/:league'>
          <League searchTerm={searchTerm} setSearchTerm={setSearchTerm} stadiumsToDisplay={stadiumsToDisplay} setStadiums={setStadiums} />
        </Route>
        <Route exact path='/mylist'>
          <MyList stadiumsToDisplay={stadiumsToDisplay} setStadiums={setStadiums}/>
        </Route>
      </Switch>
    </div >
  );
}

export default App;
