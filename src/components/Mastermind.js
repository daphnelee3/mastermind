import React, { Component } from 'react'
import axios from 'axios'
import PlayerInput from './PlayerInput'
import PreviousAttempts from './PreviousAttempts'

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
        this.resetGame = this.resetGame.bind(this);
        this.getCombo = this.getCombo.bind(this);
    }

    componentDidMount() {
        this.getCombo();
    }

    async getCombo(isReset = false) {
        try {
            const { data } = await axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new');
            const numbers = data.split('\n')
            numbers.pop() //pop off white space at end
            const integers = numbers.map(num => parseInt(num)) //parsed into an array of nums
            if (!isReset) {
                this.setState({ winningCombination: integers });
            } else {
                this.setState({
                    winningCombination: integers,
                    currentGuess: [null, null, null, null],
                    attempts: 10,
                    previousAttempts: [],
                    status: 'playing'
                });
            }
        } catch {
            console.log('error generating number');
        }
    }

    //updates currentGuess array upon number selections
    handleGuess(guessIdx, event) {
        const newGuess = this.state.currentGuess.slice() //makes a copy
        newGuess[guessIdx] = parseInt(event.target.value)
        this.setState({ currentGuess: newGuess })
    }

    handleSubmit(event) {
        const { attempts, winningCombination, currentGuess } = this.state;
        event.preventDefault();

        const correctNumandPosition = "Correct Number and Correct Position"
        const correctNumOnly = "Correct Number, but Wrong Position"
        const noCorrectGuesses = "Incorrect, Please Try Again"

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
        } else { //still playing
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

            //populates history obj
            history.feedback = message;
            history.guess = currentGuess;

            //decrement attempts remaining and builds previousAttempts array
            this.setState(prevState => {
                return {
                    attempts: prevState.attempts - 1,
                    previousAttempts: [...prevState.previousAttempts, history]
                }
            });
            console.log(winningCombination)
        }
    }

    resetGame() {
        this.getCombo(true)
    }

    render() {
        const { currentGuess, attempts, previousAttempts, status, invalidGuess } = this.state
        return (
            <div>
                <h3>MASTERMIND</h3>
                {/* <div>{this.state.winningCombination} correct combo</div> */}
                <div className="attempts-left">{attempts} Attempts Remaining</div>
                {status === 'won' ? <div> You Got It! <span role="img" aria-label="celebrate">🥳</span></div> : null}
                {status === 'lost' ? <div>Better Luck Next Time</div> : null}
                {status !== 'playing' ? <button type="button" onClick={this.resetGame}>Play Again</button> : null}

                <PlayerInput
                    currentGuess={currentGuess}
                    handleGuess={this.handleGuess}
                    handleSubmit={this.handleSubmit} />
                {invalidGuess === true ? <div> Invalid Selection. Please Choose 4 Numbers!</div> : ''}
                <PreviousAttempts
                    previousAttempts={previousAttempts} />
            </div>
        )
    }
}