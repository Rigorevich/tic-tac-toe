import { useCallback, useState } from 'react';

import { getFilledBoard, type Board } from '../utils/board';
import { calculateWinner, getFirstMoveSign, type GameResult } from '../utils/game';

export type Player = 'cross' | 'zero';
export type SquareType = 'cross' | 'zero' | null;

export const defaultBoard = getFilledBoard();

export const usePlayGame = () => {
  const [board, setBoard] = useState<Board>(defaultBoard);
  const [moves, setMoves] = useState<Board[]>([]);
  const [order, setOrder] = useState<SquareType>('cross');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const resetGame = useCallback(() => {
    const firstMove = getFirstMoveSign(moves);

    setBoard(defaultBoard);
    setOrder(firstMove === 'cross' ? 'zero' : 'cross');
    setMoves([]);
    setGameResult(null);
  }, [moves]);

  const handleJumpToMove = useCallback(
    (index: number) => {
      setBoard(moves[index]);
      setMoves(moves.slice(0, index + 1));
      setGameResult(null);
    },
    [moves]
  );

  const handleClickSquare = useCallback(
    (key: string) => {
      if (!gameResult && board[key]) {
        return;
      }

      if (gameResult) {
        return resetGame();
      }

      const updatedBoard = { ...board, [key]: order };
      const info = calculateWinner(updatedBoard);

      if (info) {
        setGameResult(info);
      } else {
        setOrder((prev) => (prev === 'cross' ? 'zero' : 'cross'));
      }

      setMoves((prev) => [...prev, updatedBoard]);
      setBoard(updatedBoard);
    },
    [board, gameResult, order, resetGame]
  );

  return { board, order, moves, gameResult, handleClickSquare, handleJumpToMove };
};
