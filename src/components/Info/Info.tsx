import classNames from 'classnames';
import { FC, memo, useEffect, useState } from 'react';

import { type SquareType } from '../../hooks/usePlayGame';
import { type GameResult } from '../../utils/game';

import styles from './Info.module.scss';

interface InfoProps {
  order: SquareType;
  winner?: GameResult['winner'];
}

type ScoreType = Record<'cross' | 'zero', number>;

export const Info: FC<InfoProps> = memo(({ order, winner }) => {
  const [score, setScore] = useState<ScoreType>({ cross: 0, zero: 0 });

  useEffect(() => {
    if (winner && winner !== 'draw') {
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
