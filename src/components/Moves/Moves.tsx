import { FC } from 'react';

import { type Board } from '../../utils/board';

import styles from './Moves.module.scss';

interface MovesProps {
  moves: Board[];
  handleJumpToMove: (index: number) => void;
}

export const Moves: FC<MovesProps> = ({ moves, handleJumpToMove }) => {
  return (
    <div className={styles.moves}>
      {moves.map((_move, index) => (
        <button
          key={index}
          className={styles.move}
          onClick={() => handleJumpToMove(index)}
        >
          Move: {index}
        </button>
      ))}
    </div>
  );
};
