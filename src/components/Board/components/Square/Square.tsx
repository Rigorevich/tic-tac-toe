import classNames from 'classnames';
import { FC } from 'react';

import { SquareType } from '../../../../hooks/usePlayGame';

import styles from './Square.module.scss';

interface SquareProps {
  value: SquareType;
  onClick: VoidFunction;
}

export const Square: FC<SquareProps> = ({ value, onClick }) => (
  <button
    className={classNames(styles.square, {
      [styles.cross]: value === 'cross',
      [styles.zero]: value === 'zero',
    })}
    onClick={onClick}
  ></button>
);
