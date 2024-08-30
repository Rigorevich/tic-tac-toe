import { useCallback, useState } from 'react';

import { getFilledBoard } from '../utils/board';
import { calculateWinner, type WinnerInfo } from '../utils/game';

export type SquareType = 'cross' | 'zero' | null;

export const usePlayGame = () => {
  const [board, setBoard] = useState(() => getFilledBoard());
  const [order, setOrder] = useState<SquareType>('cross');
  const [winnerInfo, setWinnerInfo] = useState<WinnerInfo | null>(null);

  const resetGame = useCallback(() => {
    setBoard(() => getFilledBoard());
    setWinnerInfo(null);
    setOrder((prev) => (prev === 'cross' ? 'zero' : 'cross'));
  }, []);

  const handleClickSquare = useCallback(
    (key: string) => {
      if (!winnerInfo && board[key]) {
        return;
      }

      if (winnerInfo) {
        return resetGame();
      }

      const updatedBoard = { ...board, [key]: order };
      const winningInfo = calculateWinner(updatedBoard);

      if (winningInfo) {
        setWinnerInfo(winningInfo);
      } else {
        setOrder((prev) => (prev === 'cross' ? 'zero' : 'cross'));
      }

      setBoard(updatedBoard);
    },
    [board, winnerInfo, order, resetGame]
  );

  return { board, order, winnerInfo, handleClickSquare };
};
