import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const GameRules = () => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const handleGamesRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  return (
    <div className="max-w-[200px]">
      <button onClick={handleGamesRules} className="flex items-center">
        {isRulesOpen ? <FiChevronUp className="mr-1" /> : <FiChevronDown className="mr-1" />}
        {isRulesOpen ? 'Hide Game Rules' : 'Show Game Rules'}
      </button>
      {isRulesOpen && (
        <p className="mt-2">
          You are the codebreaker and your goal is to break the secret code provided by the codemaker. At the start of
          the game, you are given 10 attempts. After each guess, the codemaker provides feedback to help you deduce the
          correct code. Feedback consists of two components: exact matches are represented by black circles where the
          guess is the correct color and in the correct position. Partial matches are represented by white circles where
          the guess is the correct color but in the wrong position. Good luck!
        </p>
      )}
    </div>
  );
};

export default GameRules;
