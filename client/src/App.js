import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/landing';
import Cams from './pages/Cams';
import Games from './pages/Games';
import MemoryGame from './components/MemoryGame';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/cams" component={Cams} /> */}
            <Route exact path="/games" component={MemoryGame} />
            {/* <Route exact path="/games" component={Fishgame} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
