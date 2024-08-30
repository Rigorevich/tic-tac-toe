import { Board } from './Board/Board';
import { Info } from './Info/Info';
import { usePlayGame } from '../hooks/usePlayGame';

import styles from './Game.module.scss';

export const Game = () => {
  const { board, order, gameResult, handleClickSquare } = usePlayGame();

  return (
    <div className={styles.wrapper}>
      <Board
        board={board}
        handleClickSquare={handleClickSquare}
        gameResult={gameResult}
      />
      <Info
        order={order}
        winner={gameResult?.winner}
      />
    </div>
  );
};
