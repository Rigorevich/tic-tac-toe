import { type PlayerType, type SquareType } from '../hooks/useTicTacToe';

export interface GameResult {
  result: 'cross' | 'zero' | 'tie';
  winningCombination: [number, number, number] | null;
}

export const checkTie = (board: Record<string, SquareType>): boolean =>
  Object.values(board).every(Boolean);

export const calculateWinner = (board: Record<string, SquareType>): GameResult | null => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { result: board[a], winningCombination: [a, b, c] };
    }
  }

  if (checkTie(board)) {
    return { result: 'tie', winningCombination: null };
  }

  return null;
};

export const getNextPlayer = (currentPlayer: PlayerType): PlayerType =>
  currentPlayer === 'cross' ? 'zero' : 'cross';
