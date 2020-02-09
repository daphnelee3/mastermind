import React, { Component } from 'react'
import axios from 'axios'
import { PlayerInput } from './PlayerInput'
import { History } from './History'

export default class Mastermind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winningCombination: '',
            currentGuess: [null, null, null, null],
            attempts: 10,
            previousAttempts: [],
            status: 'playing', //won, lost
            invalidGuess: false
        }
        this.handleGuess = this.handleGuess.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');
            const numbers = data.split('\n')
            numbers.pop()
            const integers = numbers.map(num => parseInt(num)) //parsed into an array of nums
            this.setState({ winningCombination: integers });
        } catch {
            console.log('error generating number')
        }
    }

    handleGuess(guessIdx, event) {
        const newGuess = this.state.currentGuess.slice()
        newGuess[guessIdx] = parseInt(event.target.value)
        this.setState({ currentGuess: newGuess })
    }

    //order of submit: won?
    //vvv separate into multiple methods to call
    //decrement attempts, currentGuess & msg into previousAttempts, check status, reset currentGuess
    //push feedback in previousAttempts
    handleSubmit(event) {
        const { attempts, winningCombination, currentGuess, status, previousAttempts } = this.state;
        event.preventDefault();

        const correctNumandPosition = "Correct number and position"
        const correctNumOnly = "Correct Number"
        const noCorrectGuesses = "Incorrect, please try again"

        //invalid selection
        if (attempts > 1 && (currentGuess.includes(NaN) || currentGuess.includes(null))) {
            this.setState({ invalidGuess: true })
            return
        } else {
            this.setState({ invalidGuess: false })
        }

        //checks if won
        let hasWon = true
        for (let i = 0; i < winningCombination.length; i++) {
            const winningNum = winningCombination[i];
            const playerGuess = currentGuess[i];
            if (winningNum !== playerGuess) {
                hasWon = false
                break;
            }
        }
        if (hasWon === true) {
            this.setState({ status: 'won' });
        } else if (attempts <= 1) {
            this.setState({ status: 'lost', attempts: 0 });
        } else {
            const history = {};
            let message;
            for (let i = 0; i < winningCombination.length; i++) {
                const winningNum = winningCombination[i];
                const playerGuess = currentGuess[i];
                if (winningNum === playerGuess) {
                    message = correctNumandPosition;
                    break;
                } else if (winningCombination.includes(playerGuess)) {
                    message = correctNumOnly;
                    break;
                } else {
                    message = noCorrectGuesses;
                }
            }
            history.feedback = message;
            history.guess = currentGuess;
            console.log('HISTORY', history)
            //decrement attempts remaining and build history
            this.setState(prevState => {
                return {
                    attempts: prevState.attempts - 1,
                    previousAttempts: [...prevState.previousAttempts, history]
                }
            });
        }


    }

    render() {
        const { winningCombination, currentGuess, attempts, previousAttempts, status, invalidGuess } = this.state
        console.log(currentGuess, previousAttempts)
        return (
            <div>
                <div >{winningCombination} correct combo</div>
                <div >{attempts} attempts remaining</div>
                {status === 'lost' ? <div>LOSE</div> : null}
                <PlayerInput
                    currentGuess={currentGuess}
                    handleGuess={this.handleGuess}
                    handleSubmit={this.handleSubmit} />
                {invalidGuess === true ? <div> Invalid Selection. Please Choose 4 Numbers!</div> : ''}
                <History
                    previousAttempts={previousAttempts} />
            </div>
        )
    }
}