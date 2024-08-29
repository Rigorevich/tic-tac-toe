import { FC } from 'react';

import { Square } from './components/Square/Square';

import { SquareType } from '../../hooks/usePlayGame';

import styles from './Board.module.scss';

export interface BoardProps {
  board: SquareType[];
}

export const Board: FC<BoardProps> = ({ board }) => {
  return (
    <div className={styles.board}>
      {board.map((_, index) => (
        <Square key={index} />
      ))}
    </div>
  );
};
