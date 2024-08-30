import { Player, SquareType } from '../hooks/usePlayGame';

export interface CalculateWinnerPayload {
  winner: Player;
  winningCombination: [number, number, number];
}

export const calculateWinner = (
  board: Record<string, SquareType>
): CalculateWinnerPayload | null => {
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

  return null;
};
