# Mastermind

Test your code-cracking prowess with Mastermind, the challenging game of logic and deduction. The Codemaker sets a secret code, and the Codebreaker tries to match the code using logic, deduction, and maybe even a little bit of luck. It's a simple, fast, strategy game with more than 2000 possible combinations. Now that's a brainteaser!

## Download

To begin, please download the repo:

```
cd <directory you want to download to>

git clone https://github.com/daphnelee3/mastermind.git

cd mastermind

npm install

npm start

Visit http://localhost:3000 to play
```

## Project Overview
This web application was initialized using the [Create React App](https://github.com/facebook/create-react-app). At the top level, the ReactDOM used in the index file allows for DOM manipulation.The render method pulls a React element into the DOM in the supplied container and returns a reference to the component. In this case, we grab the html element with an id of "root" and render the App component. 

![home page](/public/homepage-screenshot.png)

In **App**, we have the react routes that directs to three possible pages: Rules, Play Game, and History, which are three clickable links displayed in the navigation bar. Both *Rules* and *History* are static, informational pages that instructions users on how to play and provides a history lesson of how the Mastermind game originated way back when.

An alternative way to reach the game-playing page is to choose from three difficulty levels on the home page labeled as "easy", "medium," and hard," which renders the appropriate mode in the GamePlay component. This is accomplished via a handleClick (*handleDifficulty*) that sets the *difficulty* state to the appropriate value the button is assigned to and then conditionally rendering either **Mastermind** (easy mode), **MediumMode**, or **HardMode**. The number of attempts a player has to guess the winning combination depends on their selected mode.

For the computer to act as an opponent, I used the [Random Number Generator API](https://www.random.org/clients/http/api/) to make an axios call to randomly select a 4 digit number from 0 to 7. The fetched data is then parsed into an array of numbers to compare by index with the player's current guess.

Upon submitting a guess, the *handleSumbit* method checks for a few possible cases. First, whether the current guess is a valid 4 numbers chosen. Then if there are no more attempts left going forward, status changes 'won' or 'lost' and a 'Play Again' button appears to reset the game for another round.

Lastly, if status is still in playing mode, the current guess and proper feedback is populated into the history object. The history object is then pushed into the *previousAttempts* array so the player may keep track of prior guesses and number of attempts decrements. 


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

