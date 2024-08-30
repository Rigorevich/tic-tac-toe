import { Board } from './board';
import { SquareType } from '../hooks/usePlayGame';

export interface GameResult {
  winner: 'cross' | 'zero' | 'draw';
  winningCombination: [number, number, number] | null;
}

export const checkDraw = (board: Record<string, SquareType>): boolean =>
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
      return { winner: board[a], winningCombination: [a, b, c] };
    }
  }

  if (checkDraw(board)) {
    return { winner: 'draw', winningCombination: null };
  }

  return null;
};

export const getFirstMoveSign = (moves: Board[]) => {
  if (moves.length === 0) {
    return null;
  }

  const firstBoard = moves[0];

  const firstMove = Object.values(firstBoard).find((value) => value !== null);

  return firstMove || null;
};
