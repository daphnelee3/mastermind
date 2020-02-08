import React, { Component } from 'react'
import axios from 'axios'
import { PlayerInput } from './PlayerInput'

export default class Mastermind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winningCombination: '',
            currentGuess: [0, 0, 0, 0],
            attempts: 0,
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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({});
    }

    render() {
        const { winningCombination, currentGuess, attempts, previousAttempts, status } = this.state
        return (
            <div>
                <div >{winningCombination} correct combo test</div>
                <PlayerInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}