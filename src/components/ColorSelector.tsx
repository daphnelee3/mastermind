import { useGameContext } from '../GameContext';
import { colors } from '../constants';
import getColorClass from '../getColorClass';
import { Color } from '../types';

const ColorSelector = () => {
  const { state, dispatch } = useGameContext();

  const handleColorClick = (color: Color) => {
    const newGuess = [...state.rows[state.activeRowIdx].guess];
    const emptyIndex = newGuess.findIndex((c) => c === '');
    if (emptyIndex !== -1) {
      newGuess[emptyIndex] = color;
      dispatch({ type: 'MAKE_GUESS', payload: { guess: newGuess } });
    }
  };

  return (
    <div className="flex justify-center mt-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-10 h-10 rounded-full m-2 cursor-pointer ${getColorClass(color)}`}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorSelector;
