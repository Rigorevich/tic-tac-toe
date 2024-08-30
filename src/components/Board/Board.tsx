import { FC } from 'react';

import { Square } from './components/Square/Square';

import { type SquareType } from '../../hooks/useTicTacToe';
import { type GameResult } from '../../utils/game';

import styles from './Board.module.scss';

export interface BoardProps {
  board: Record<string, SquareType>;
  gameResult: GameResult | null;
  handleClickSquare: (key: string) => void;
}

export const Board: FC<BoardProps> = ({ board, gameResult, handleClickSquare }) => {
  return (
    <div className={styles.board}>
      {Object.keys(board).map((key) => (
        <Square
          key={key}
          boardKey={key}
          gameResult={gameResult}
          value={board[key]}
          onClick={() => handleClickSquare(key)}
        />
      ))}
    </div>
  );
};
