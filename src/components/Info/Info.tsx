import { FC, memo } from 'react';

import styles from './Info.module.scss';

export const Info: FC = memo(() => {
  return (
    <div className={styles.info}>
      <div className={styles.section}>
        <div className={styles.player}>Player 1 (X)</div>
        <div className={styles.score}>0</div>
      </div>
      <div className={styles.section}>
        <div className={styles.player}>Player 2 (O)</div>
        <div className={styles.score}>0</div>
      </div>
    </div>
  );
});
