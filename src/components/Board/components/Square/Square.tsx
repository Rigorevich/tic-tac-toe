import classNames from 'classnames';
import { FC } from 'react';

import { SquareType } from '../../../../hooks/usePlayGame';

import styles from './Square.module.scss';

interface SquareProps {
  winningCombination?: [number, number, number];
  boardKey: string;
  value: SquareType;
  onClick: VoidFunction;
}

export const Square: FC<SquareProps> = ({ winningCombination, boardKey, value, onClick }) => {
  const _className = classNames(styles.square, {
    [styles.cross]: value === 'cross',
    [styles.zero]: value === 'zero',
    [styles.winning]: winningCombination && winningCombination.includes(Number(boardKey)),
    [styles.dimmed]: winningCombination && !winningCombination.includes(Number(boardKey)),
  });

  return (
    <button
      className={_className}
      onClick={onClick}
    ></button>
  );
};
