import React from 'react'

export const NumberSelectors = ({ handleChange, guessIdx }) => {
    return (
        <select name="integers" onChange={(e) => handleChange(guessIdx, e)}>
            <option value="">Please select a number</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
    )
}