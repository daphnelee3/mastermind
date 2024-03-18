import { useState } from 'react';
import GameBoard from './GameBoard';
import Feedback from './Feedback';
import NewGameButton from './NewGameButton';
import GameRules from './GameRules';

export const GameContainer = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFeedbackDisplay = () => {
    setShowFeedback(true);
  };

  return (
    <div className="bg-gray-200">
      <h1 className="ml-8 p-6 text-3xl text-center">Mastermind</h1>
      <main className="flex justify-center  h-screen">
        <div className="flex items-start">
          <div className="flex flex-col items-start mr-10">
            <NewGameButton />
            <GameRules />
          </div>
          <GameBoard onFeedbackSubmit={handleFeedbackDisplay} />
          {showFeedback && <Feedback />}
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <a className="underline text-center" href="https://github.com/daphnelee3/mastermind" target="_blank">
          See repo
        </a>
      </footer>
    </div>
  );
};

export default GameContainer;
