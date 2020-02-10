import React from 'react'
import { NumberSelectors } from './NumberSelectors'

export const PlayerInput = ({ currentGuess, handleGuess, handleSubmit }) => {
    return (
        <div>
            {currentGuess.map((digit, idx) => (
                <NumberSelectors key={idx} guessIdx={idx} handleGuess={handleGuess} />
            ))}
            <button className="submitButton" onClick={handleSubmit}>submit</button>
        </div>
    )
}