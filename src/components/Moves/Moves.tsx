import { FC } from 'react';

import { MoveType } from '../../hooks/useTicTacToe';

import styles from './Moves.module.scss';

interface MovesProps {
  moves: MoveType[];
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
