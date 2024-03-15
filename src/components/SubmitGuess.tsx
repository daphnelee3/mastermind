import { useState } from 'react';
import { useGameContext } from '../GameContext';
import Modal from './Modal';

type SubmitGuessProps = { onFeedbackSubmit: () => void };

const SubmitGuess = ({ onFeedbackSubmit }: SubmitGuessProps) => {
  const { state, dispatch } = useGameContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameStatus, setGameStatus] = useState<'playing' | 'win' | 'lose'>('playing');

  const handleSubmit = () => {
    const currentRow = state.rows[state.activeRowIdx];
    const secretCode = state.secretCode;
    const isRowFilled = currentRow.guess.every((c) => c !== '');
    const isLastRow = state.activeRowIdx === state.rows.length - 1;
    const isGuessCorrect = currentRow.guess.every((color, index) => color === secretCode[index]);

    if (isRowFilled) {
      if (isGuessCorrect) {
        setGameStatus('win');
      } else if (isLastRow) {
        setGameStatus('lose');
      } else {
        dispatch({ type: 'NEXT_ROW' });
      }
    } else {
      setIsModalOpen(true);
    }

    onFeedbackSubmit();
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="p-6">Please fill all circles before submitting.</p>
      </Modal>
      <Modal isOpen={gameStatus === 'win'} onClose={() => setGameStatus('playing')}>
        <p className="p-6">You Win! 🥳</p>
      </Modal>
      <Modal isOpen={gameStatus === 'lose'} onClose={() => setGameStatus('playing')}>
        <p className="p-6">Game over. Better luck next time!</p>
      </Modal>
      <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'} onClick={handleSubmit}>
        Submit Guess
      </button>
    </div>
  );
};

export default SubmitGuess;
