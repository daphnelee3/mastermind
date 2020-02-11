import React from "react";
import logo from '../logo.svg';
import Mastermind from './Mastermind'
import MediumMode from './MediumMode'
import HardMode from './HardMode'


const GamePlay = ({ difficulty }) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <Mastermind />
                    {difficulty === 'easy' && <Mastermind />}
                    {difficulty === 'medium' && <MediumMode />}
                    {difficulty === 'hard' && <HardMode />}

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