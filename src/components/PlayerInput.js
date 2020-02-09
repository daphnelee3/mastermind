import React from 'react'
import { NumberSelectors } from './NumberSelectors'

export const PlayerInput = ({ currentGuess, handleGuess, handleSubmit }) => {
    console.log('something CHANGED')
    return (
        <div>
            {currentGuess.map((digit, idx) => (
                <NumberSelectors key={idx} guessIdx={idx} handleGuess={handleGuess} />
            ))}
            <button className="button" onClick={handleSubmit}>submit</button>
        </div>
    )
}