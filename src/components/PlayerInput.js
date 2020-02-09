import React from 'react'
import { NumberSelectors } from './NumberSelectors'

export const PlayerInput = ({ currentGuess, handleChange, handleSubmit }) => {
    console.log('something CHANGED')
    return (
        <div>
            {currentGuess.map((digit, idx) => (
                <NumberSelectors key={idx} guessIdx={idx} handleChange={handleChange} />
            ))}
            <button className="button" onClick={handleSubmit}>submit</button>
        </div>
    )
}