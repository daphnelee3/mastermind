import React, { Component } from 'react'
import axios from 'axios'
import { PlayerInput } from './PlayerInput'

export default class Mastermind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winningCombination: '',
            currentGuess: [null, null, null, null],
            attempts: 10,
            previousAttempts: [],
            status: '', //win, lose, playing
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');
            const numbers = data.split('\n')
            numbers.pop()
            const integers = numbers.map(num => parseInt(num))
            this.setState({ winningCombination: integers });
        } catch {
            console.log('error generating number')
        }
    }

    handleChange(guessIdx, event) {
        const newGuess = this.state.currentGuess.slice()
        newGuess[guessIdx] = parseInt(event.target.value)
        this.setState({ currentGuess: newGuess })
    }

    //if num not selected, prompt to select one
    handleSubmit(event) {
        event.preventDefault();
        this.setState({});
    }

    render() {
        const { winningCombination, currentGuess, attempts, previousAttempts, status } = this.state
        console.log(currentGuess)
        return (
            <div>
                <div >{winningCombination} correct combo</div>
                <div >{attempts} attempts remaining</div>
                <PlayerInput
                    currentGuess={currentGuess}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}