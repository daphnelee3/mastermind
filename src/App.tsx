import { GameProvider } from './GameContext';
import GameContainer from './components/GameContainer';

function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}

export default App;
