import classNames from 'classnames';
import { FC } from 'react';

import { type SquareType } from '../../../../hooks/useTicTacToe';
import { isWinnerSquare } from '../../../../utils/board';
import { type GameResultType } from '../../../../utils/game';

import styles from './Square.module.scss';

interface SquareProps {
  winningCombinations?: GameResultType['winningCombination'];
  boardKey: string;
  value: SquareType;
  handleClickSquare: VoidFunction;
}

export const Square: FC<SquareProps> = ({
  value,
  boardKey,
  winningCombinations,
  handleClickSquare,
}) => {
  const isWinner = isWinnerSquare(boardKey, winningCombinations);

  const _className = classNames(styles.square, {
    [styles.cross]: value === 'cross',
    [styles.zero]: value === 'zero',
    [styles.winning]: isWinner,
    [styles.dimmed]: !isWinner,
  });

  return (
    <button
      className={_className}
      onClick={handleClickSquare}
    ></button>
  );
};
