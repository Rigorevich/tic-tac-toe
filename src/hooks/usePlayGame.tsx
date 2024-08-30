import { useCallback, useState } from 'react';

import { getFilledBoard } from '../utils/board';

export type SquareType = 'cross' | 'zero' | null;

export const usePlayGame = () => {
  const [board, setBoard] = useState(() => getFilledBoard());
  const [order, setOrder] = useState<SquareType>('cross');

  const handleClickSquare = useCallback(
    (key: string) => {
      setBoard((prev) => ({ ...prev, [key]: order }));
      setOrder((prev) => (prev === 'cross' ? 'zero' : 'cross'));
    },
    [order]
  );

  return { board, order, handleClickSquare };
};
