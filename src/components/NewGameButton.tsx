import { useGameContext } from '../GameContext';

const NewGameButton = () => {
  const { dispatch } = useGameContext();

  const handleNewGame = () => {
    dispatch({ type: 'NEW_GAME' });
  };

  return (
    <div className="my-8 mr-12">
      <button
        onClick={handleNewGame}
        className={'border border-neutral-800 bg-neutral-100 hover:bg-neutral-400 font-bold py-2 px-4 rounded'}
      >
        New Game
      </button>
    </div>
  );
};

export default NewGameButton;
