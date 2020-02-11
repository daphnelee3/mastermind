import React from "react";
import logo from '../logo.svg';
import Mastermind from './Mastermind'

const GamePlay = () => {
    return (
        <div className="App">
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
        </div>
    );
};

export default GamePlay