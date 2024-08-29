import { useState } from 'react';

export type SquareType = 'cross' | 'zero' | null;

const getFilledBoard = (): SquareType[] => Array(9).fill(null);

export const usePlayGame = () => {
  const [board, setBoard] = useState(() => getFilledBoard());

  return { board, setBoard };
};
