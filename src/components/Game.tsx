import { Board } from './Board/Board';
import { Info } from './Info/Info';
import { usePlayGame } from '../hooks/usePlayGame';

import styles from './Game.module.scss';

export const Game = () => {
  const { board, order, winnerInfo, handleClickSquare } = usePlayGame();

  return (
    <div className={styles.wrapper}>
      <Board
        board={board}
        handleClickSquare={handleClickSquare}
        winningCombination={winnerInfo?.winningCombination}
      />
      <Info
        order={order}
        winner={winnerInfo?.winner}
      />
    </div>
  );
};
