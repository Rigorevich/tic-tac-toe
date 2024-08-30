import { useCallback, useState } from 'react';

import { getFilledBoard, type BoardType } from '../utils/board';
import { calculateWinner, getFirstMoveSign, getNextPlayer, type GameResult } from '../utils/game';

export type SquareType = 'cross' | 'zero' | null;

export const defaultBoard = getFilledBoard();

export const useTicTacToe = () => {
  const [board, setBoard] = useState<BoardType>(defaultBoard);
  const [moves, setMoves] = useState<BoardType[]>([]);
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
      if (gameResult || board[key]) {
        if (gameResult) resetGame();

        return;
      }

      const updatedBoard = { ...board, [key]: order };
      const info = calculateWinner(updatedBoard);

      if (info) {
        setGameResult(info);
      } else {
        setOrder(getNextPlayer(order));
      }

      setMoves((prev) => [...prev, updatedBoard]);
      setBoard(updatedBoard);
    },
    [board, gameResult, order, resetGame]
  );

  return { board, order, moves, gameResult, handleClickSquare, handleJumpToMove };
};
