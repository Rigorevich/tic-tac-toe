import { FC } from 'react';

import { Square } from './components/Square/Square';

import styles from './Board.module.scss';

const squares = Array(9).fill(null);

export const Board: FC = () => {
  return (
    <div className={styles.board}>
      {squares.map((_, index) => (
        <Square key={index} />
      ))}
    </div>
  );
};
