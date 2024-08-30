import { FC } from 'react';

import { Square } from './components/Square/Square';

import { type SquareType } from '../../hooks/usePlayGame';
import { type WinnerInfo } from '../../utils/game';

import styles from './Board.module.scss';

export interface BoardProps {
  board: Record<string, SquareType>;
  winnerInfo: WinnerInfo | null;
  handleClickSquare: (key: string) => void;
}

export const Board: FC<BoardProps> = ({ board, winnerInfo, handleClickSquare }) => {
  return (
    <div className={styles.board}>
      {Object.keys(board).map((key) => (
        <Square
          key={key}
          boardKey={key}
          winnerInfo={winnerInfo}
          value={board[key]}
          onClick={() => handleClickSquare(key)}
        />
      ))}
    </div>
  );
};
