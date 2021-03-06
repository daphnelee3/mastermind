import React from "react";
import { Link } from "react-router-dom";
import Mastermind from './Mastermind'
import MediumMode from './MediumMode'
import HardMode from './HardMode'

const HomePage = ({ difficulty, handleDifficulty }) => {
    return (
        <div className="homepage">
            <img src="brain.png" alt="brain" style={{ width: 300, height: 300 }} />
            <h1>Welcome to Mastermind!</h1>
            <h3>
                Let's Play
            </h3>
            <div>
                <Link to="/play">
                    <button type="button" className="mode-button" value="easy" onClick={handleDifficulty}>easy</button>
                </Link>
                <Link to="/play">
                    <button type="button" className="mode-button" value="medium" onClick={handleDifficulty}>medium</button>
                </Link>
                <Link to="/play">
                    <button type="button" className="mode-button" value="hard" onClick={handleDifficulty}>hard</button>
                </Link>
            </div>
            <div>
                {difficulty === 'easy' && <Mastermind />}
                {difficulty === 'medium' && <MediumMode />}
                {difficulty === 'hard' && <HardMode />}
            </div>
        </div>
    );
};

export default HomePage