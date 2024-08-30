import { useCallback, useState } from 'react';

import { defaultBoard } from '../constants/board';
import { type Board } from '../utils/board';
import { calculateWinner, type GameResult } from '../utils/game';

export type SquareType = 'cross' | 'zero' | null;

export const usePlayGame = () => {
  const [board, setBoard] = useState<Board>(defaultBoard);
  const [history, setHistory] = useState<Board[]>([]);
  const [order, setOrder] = useState<SquareType>('cross');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const resetGame = useCallback(() => {
    setBoard(defaultBoard);
    setHistory([]);
    setGameResult(null);
    setOrder((prev) => (prev === 'cross' ? 'zero' : 'cross'));
  }, []);

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

      setHistory((prev) => [...prev, updatedBoard]);
      setBoard(updatedBoard);
    },
    [board, gameResult, order, resetGame]
  );

  return { board, order, history, gameResult, handleClickSquare };
};
