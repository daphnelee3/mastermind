import React from 'react'

const NumberSelectors = ({ handleGuess, guessIdx, difficulty }) => {
    let options = [...Array(10).keys()];
    switch (difficulty) {
        case 'easy':
            options = [...Array(6).keys()];
            break;
        case 'medium':
            options = [...Array(8).keys()];
            break;
        case 'hard':
            options = [...Array(10).keys()];
            break;
        default:
            break;
    }
    return (
        <select className="select-button" name="integers"
            onChange={(e) => handleGuess(guessIdx, e)}>
            {<option value="">Please select a number</option>}
            {options.map((el, idx) => (
                <option value={idx}>{idx}</option>
            ))}
            {/* <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option> */}
        </select>
    )
}

export default NumberSelectors