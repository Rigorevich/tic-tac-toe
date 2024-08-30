import { Board } from './Board/Board';
import { Info } from './Info/Info';
import { Moves } from './Moves/Moves';
import { usePlayGame } from '../hooks/usePlayGame';

import styles from './Game.module.scss';

export const Game = () => {
  const { board, moves, order, gameResult, handleJumpToMove, handleClickSquare } = usePlayGame();

  return (
    <div className={styles.container}>
      <div className={styles.boardWrapper}>
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
      <Moves
        moves={moves}
        handleJumpToMove={handleJumpToMove}
      />
    </div>
  );
};
