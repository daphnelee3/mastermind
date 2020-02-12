import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import GamePlay from './components/GamePlay';
import HomePage from './components/HomePage';
import Rules from './components/Rules';
import History from './components/History';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      attempts: 10,
      difficulty: '',
    }
    this.handleDifficulty = this.handleDifficulty.bind(this)
  }

  handleDifficulty(event) {
    this.setState({ difficulty: event.target.value })
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/rules">Rules</Link>
            <Link to="/play">Play Game</Link>
            <Link to="/history">History</Link>
          </nav>
          <main>
            <Switch>
              <Route exact path="/"
                render={(props) => (<HomePage {...props}
                  difficulty={this.state.difficulty}
                  handleDifficulty={this.handleDifficulty} />)} />
              <Route exact path="/play"
                render={(props) => (<GamePlay {...props}
                  difficulty={this.state.difficulty}
                  handleDifficulty={this.handleDifficulty} />)}>
              </Route>
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/history" component={History} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </Router >
    );
  }
}
