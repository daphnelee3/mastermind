import React from 'react'
import { NumberSelects } from './NumberSelects'

export const PlayerInput = ({ currentGuess, handleChange, handleSubmit }) => {
    console.log('something CHANGED')
    return (
        <div>
            <NumberSelects handleChange={handleChange} />
            <NumberSelects handleChange={handleChange} />
            <NumberSelects handleChange={handleChange} />
            <NumberSelects handleChange={handleChange} />
            <button className="button" onClick={handleSubmit}>submit</button>
        </div>
    )
}