import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';
import { Feedback } from './types';
import createNewBoard from './createNewBoard';
import generateSecretCode from './generateSecretCode';

interface Row {
  guess: string[];
  feedback: Feedback;
}

interface State {
  secretCode: string[];
  rows: Row[];
  activeRowIdx: number;
}

type Action =
  | { type: 'MAKE_GUESS'; payload: { guess: string[] } }
  | { type: 'RESET_ROW' }
  | { type: 'NEXT_ROW' }
  | { type: 'NEW_GAME' };

const initialState: State = {
  secretCode: generateSecretCode(),
  rows: createNewBoard(),
  activeRowIdx: 0,
};

export interface GameContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const GameContext = createContext<GameContextType>({ state: initialState, dispatch: () => {} });

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  return useContext(GameContext);
};

const gameReducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (type) {
    case 'MAKE_GUESS': {
      const newRows = state.rows.map((row, index) => {
        if (index !== state.activeRowIdx) {
          return row;
        }
        const updatedRow = {
          ...row,
          guess: action.payload.guess,
        };

        const isRowFilled = updatedRow.guess.every((c) => c !== '');
        if (isRowFilled) {
          const feedback = calculateFeedback(updatedRow.guess, state.secretCode);
          return { ...updatedRow, feedback };
        }

        return updatedRow;
      });

      return { ...state, rows: newRows };
    }
    case 'RESET_ROW': {
      const newRows = [...state.rows];
      const currentRow = newRows[state.activeRowIdx];

      newRows[state.activeRowIdx] = {
        ...currentRow,
        guess: ['', '', '', ''],
      };
      return { ...state, rows: newRows };
    }
    case 'NEXT_ROW':
      return { ...state, activeRowIdx: state.activeRowIdx + 1 };
    case 'NEW_GAME':
      return {
        secretCode: generateSecretCode(),
        rows: createNewBoard(),
        activeRowIdx: 0,
      };
    default:
      return state;
  }
};
