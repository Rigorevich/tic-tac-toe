import classNames from 'classnames';
import { FC, memo } from 'react';

import { SquareType } from '../../hooks/usePlayGame';

import styles from './Info.module.scss';

interface InfoProps {
  order: SquareType;
}

export const Info: FC<InfoProps> = memo(({ order }) => {
  return (
    <div className={styles.info}>
      <div
        className={classNames(styles.section, {
          [styles.active]: order === 'cross',
        })}
      >
        <div className={styles.player}>Player 1 (X)</div>
        <div className={styles.score}>0</div>
      </div>
      <div
        className={classNames(styles.section, {
          [styles.active]: order === 'zero',
        })}
      >
        <div className={styles.player}>Player 2 (O)</div>
        <div className={styles.score}>0</div>
      </div>
    </div>
  );
});
