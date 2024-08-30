import { Board } from './Board/Board';
import { Message } from './Message/Message';
import { Moves } from './Moves/Moves';
import { Score } from './Score/Score';
import { useTicTacToe } from '../hooks/useTicTacToe';

import styles from './Game.module.scss';

export const Game = () => {
  const { board, moves, player, gameResult, score, handleJumpToMove, handleClickSquare } =
    useTicTacToe();

  return (
    <div className={styles.container}>
      <Message
        player={player}
        result={gameResult?.result}
      />
      <Board
        board={board}
        handleClickSquare={handleClickSquare}
        gameResult={gameResult}
      />
      <Score score={score} />
      <Moves
        moves={moves}
        handleJumpToMove={handleJumpToMove}
      />
    </div>
  );
};
