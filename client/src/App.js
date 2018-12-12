import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/landing';
import Cams from './pages/Cams';
import Games from './pages/Games';
import MemoryGame from './pages/Memory';
import Playfish from './pages/Playfish';
import Animals from './pages/Animals';

// import { compareAsc } from "date-fns";
// // import FishGame from './components/FishGame';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Games" component={Games}/>
            <Route exact path="/Memory" component={MemoryGame}/>
            <Route exact path="/Cams" component={Cams}/>
            <Route exact path="/Playfish" component={Playfish}/> 
            <Route exact path="/Animals" component={Animals}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
