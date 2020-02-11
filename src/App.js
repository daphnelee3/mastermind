import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import Mastermind from './components/Mastermind'
import GamePlay from './components/GamePlay';
import HomePage from './components/HomePage';
import Rules from './components/Rules';

function App() {
  return (
    <Router>
      <div>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <Mastermind />
            </div>
            <a
              className="App-link"
              href="https://github.com/daphnelee3/mastermind"
              target="_blank"
              rel="noopener noreferrer"
            >
              See How This Game Was Built
        </a>
          </header>
        </div> */}
        <nav>
          <Link to="/rules">Rules</Link>
          <Link to="/play">Play</Link>
          <Link to="/history">History</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/play" component={GamePlay} />
            <Route exact path="/rules" component={Rules} />
            {/* <Route exact path="/history" component={History} /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
