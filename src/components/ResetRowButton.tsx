import { useState } from 'react';
import { useGameContext } from '../GameContext';

const ResetRowButton = () => {
  const { state, dispatch } = useGameContext();
  const [lastRowSubmitted, setLastRowSubmitted] = useState(false);

  const currentRow = state.rows[state.activeRowIdx];
  const isRowEmpty = currentRow.guess.every((c) => c === '');
  const isLastRow = state.activeRowIdx === state.rows.length - 1;

  const handleResetRow = () => {
    dispatch({ type: 'RESET_ROW' });
    isLastRow && setLastRowSubmitted(true);
  };

  return (
    <button
      onClick={handleResetRow}
      className={`${isRowEmpty || lastRowSubmitted ? 'bg-gray-500' : 'bg-rose-500 hover:bg-rose-700'} text-white font-bold py-2 px-4 rounded`}
      disabled={isRowEmpty || lastRowSubmitted}
    >
      Reset Row
    </button>
  );
};

export default ResetRowButton;
