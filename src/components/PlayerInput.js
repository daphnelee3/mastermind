import React from 'react'
import NumberSelectors from './NumberSelectors'

const PlayerInput = ({ currentGuess, handleGuess, handleSubmit, difficulty }) => {
    // debugger;
    return (
        <div>
            {currentGuess.map((digit, idx) => (
                <NumberSelectors key={idx} guessIdx={idx} handleGuess={handleGuess} difficulty={difficulty} />
            ))}
            <button
                className="submit-button"
                type="button"
                onClick={handleSubmit}>submit
            </button>
        </div>
    )
}

export default PlayerInput