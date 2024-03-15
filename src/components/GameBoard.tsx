import { useGameContext } from '../GameContext';
import getColorClass from '../getColorClass';
import { Color } from '../types';
import ColorSelector from './ColorSelector';
import SubmitGuess from './SubmitGuess';

type GameBoardProps = { onFeedbackSubmit: () => void };

const GameBoard = ({ onFeedbackSubmit }: GameBoardProps) => {
  const { state } = useGameContext();

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      {state.rows.map((row, rowIdx) => (
        <div key={rowIdx} className={`${rowIdx === state.activeRowIdx ? 'bg-gray-100' : ''}`}>
          <div className="flex justify-center">
            {row.guess.map((color, circleIdx) => (
              <div
                key={circleIdx}
                className={`w-10 h-10 rounded-full m-2 ${color ? getColorClass(color as Color) : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      ))}
      <ColorSelector />
        <SubmitGuess onFeedbackSubmit={onFeedbackSubmit} />
    </div>
  );
};

export default GameBoard;
