import React, { Component } from 'react'
import axios from 'axios'

export default class Mastermind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winningCombination: '',
            attempts: 0,
            previousAttempts: [],
            status: '', //win, lose, playing
        }
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

    render() {
        const { winningCombination, attempts, previousAttempts, status } = this.state
        console.log(typeof winningCombination, winningCombination)
        return (
            <div>
                <div >{winningCombination} correct combo test</div>
            </div>
        )
    }
}