import classNames from 'classnames';
import { FC, memo, useEffect, useState } from 'react';

import { Player, SquareType } from '../../hooks/usePlayGame';

import styles from './Info.module.scss';

interface InfoProps {
  order: SquareType;
  winner?: Player;
}

export const Info: FC<InfoProps> = memo(({ order, winner }) => {
  const [score, setScore] = useState<Record<'cross' | 'zero', number>>({ cross: 0, zero: 0 });

  useEffect(() => {
    if (winner) {
      setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
    }
  }, [winner]);

  return (
    <div className={styles.info}>
      <div
        className={classNames(styles.section, {
          [styles.active]: order === 'cross',
        })}
      >
        <div className={styles.player}>Player 1 (X)</div>
        <div className={styles.score}>{score.cross}</div>
      </div>
      <div
        className={classNames(styles.section, {
          [styles.active]: order === 'zero',
        })}
      >
        <div className={styles.player}>Player 2 (O)</div>
        <div className={styles.score}>{score.zero}</div>
      </div>
    </div>
  );
});
