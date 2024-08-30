import { FC } from 'react';

import { Square } from './components/Square/Square';

import { SquareType } from '../../hooks/usePlayGame';

import styles from './Board.module.scss';

export interface BoardProps {
  board: Record<string, SquareType>;
  winningCombination?: [number, number, number];
  handleClickSquare: (key: string) => void;
}

export const Board: FC<BoardProps> = ({ board, winningCombination, handleClickSquare }) => {
  return (
    <div className={styles.board}>
      {Object.keys(board).map((key) => (
        <Square
          key={key}
          boardKey={key}
          winningCombination={winningCombination}
          value={board[key]}
          onClick={() => handleClickSquare(key)}
        />
      ))}
    </div>
  );
};
