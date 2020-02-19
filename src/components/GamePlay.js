import React from "react";
import logo from '../logo.svg';
import Mastermind from './Mastermind'
import MediumMode from './MediumMode'
import HardMode from './HardMode'


const GamePlay = ({ difficulty, handleDifficulty }) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <button type="button" className="mode-button" value="easy" onClick={handleDifficulty}>easy</button>
                <button type="button" className="mode-button" value="medium" onClick={handleDifficulty}>medium</button>
                <button type="button" className="mode-button" value="hard" onClick={handleDifficulty}>hard</button>
                <div>
                    {difficulty === 'easy' && <Mastermind
                        difficulty={difficulty} />}
                    {difficulty === 'medium' && <MediumMode
                        difficulty={difficulty} />}
                    {difficulty === 'hard' && <HardMode
                        difficulty={difficulty} />}
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