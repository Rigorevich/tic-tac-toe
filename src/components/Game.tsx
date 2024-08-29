import { Board } from './Board/Board';

import styles from './Game.module.scss';

export const Game = () => {
  return (
    <div className={styles.wrapper}>
      <Board />
    </div>
  );
};
