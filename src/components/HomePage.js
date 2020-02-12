import React from "react";
import { Link } from "react-router-dom";
import Mastermind from './Mastermind'
import MediumMode from './MediumMode'
import HardMode from './HardMode'

const HomePage = ({ difficulty, handleDifficulty }) => {
    return (
        <div className="homepage">
            <img src="https://media.giphy.com/media/5T06ftQWtCMy0XFaaI/giphy.gif" alt="" />
            <h1>Welcome to Mastermind!</h1>
            <p>
                Let's Play
            </p>
            <div>
                <Link to="/play"><button type="button" value="easy" onClick={handleDifficulty}>easy</button></Link>
                <Link to="/play"><button type="button" value="medium" onClick={handleDifficulty}>medium</button></Link>
                <Link to="/play"><button type="button" value="hard" onClick={handleDifficulty}>hard</button></Link>
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