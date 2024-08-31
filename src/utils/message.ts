import { type GameResultType } from './game';
import { type TurnType } from '../hooks/useTicTacToe';

export const getResultMessage = (result: GameResultType['result']) => {
  if (result === 'tie') return 'Tie';
  return result === 'cross' ? 'Player 1 (X) is winner' : 'Player 2 (0) is winner';
};

export const getTurnMessage = (turn: TurnType) => {
  return `Turn: ${turn === 'cross' ? 'Player 1 (X)' : 'Player 2 (0)'}`;
};
