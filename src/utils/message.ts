import { type GameResult } from './game';
import { type PlayerType } from '../hooks/useTicTacToe';

export const getResultMessage = (result: GameResult['result']) => {
  if (result === 'tie') return 'Tie';
  return result === 'cross' ? 'Player 1 (X) is winner' : 'Player 2 (0) is winner';
};

export const getTurnMessage = (player: PlayerType) => {
  return `Turn: ${player === 'cross' ? 'Player 1 (X)' : 'Player 2 (0)'}`;
};
