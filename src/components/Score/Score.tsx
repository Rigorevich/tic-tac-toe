import { FC, memo } from 'react';

import { type ScoreType } from '../../hooks/useTicTacToe';

import styles from './Score.module.scss';

interface ScoreProps {
  score: ScoreType;
}

export const Score: FC<ScoreProps> = memo(({ score }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <div className={styles.player}>Player 1 (X)</div>
        <div className={styles.score}>{score.cross}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.player}>Tie</div>
        <div className={styles.score}>{score.tie}</div>
      </div>
      <div className={styles.section}>
        <div className={styles.player}>Player 2 (O)</div>
        <div className={styles.score}>{score.zero}</div>
      </div>
    </div>
  );
});
