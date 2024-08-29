import { Board } from './Board/Board';
import { Info } from './Info/Info';
import { usePlayGame } from '../hooks/usePlayGame';

import styles from './Game.module.scss';

export const Game = () => {
  const { board } = usePlayGame();

  return (
    <div className={styles.wrapper}>
      <Board board={board} />
      <Info />
    </div>
  );
};
