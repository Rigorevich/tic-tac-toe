import classNames from 'classnames';
import { FC } from 'react';

import { type SquareType } from '../../../../hooks/usePlayGame';
import { isWinnerSquare } from '../../../../utils/board';
import { type GameResult } from '../../../../utils/game';

import styles from './Square.module.scss';

interface SquareProps {
  gameResult: GameResult | null;
  boardKey: string;
  value: SquareType;
  onClick: VoidFunction;
}

export const Square: FC<SquareProps> = ({ gameResult, boardKey, value, onClick }) => {
  const isWinner = isWinnerSquare(boardKey, gameResult?.winningCombination);

  const _className = classNames(styles.square, {
    [styles.cross]: value === 'cross',
    [styles.zero]: value === 'zero',
    [styles.draw]: gameResult?.winner === 'draw',
    [styles.winning]: isWinner,
    [styles.dimmed]: !isWinner,
  });

  return (
    <button
      className={_className}
      onClick={onClick}
    ></button>
  );
};
