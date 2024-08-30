import { FC } from 'react';

import { type PlayerType } from '../../hooks/useTicTacToe';
import { type GameResultType } from '../../utils/game';
import { getResultMessage, getTurnMessage } from '../../utils/message';

import styles from './Message.module.scss';

interface MessageProps {
  player: PlayerType;
  result?: GameResultType['result'];
}

export const Message: FC<MessageProps> = ({ player, result }) => {
  return (
    <div className={styles.message}>
      {result ? (
        <div className={styles.result}>
          <span className={styles.winner}>Result: {getResultMessage(result)}</span>
          <span className={styles.retry}>Press on the board to restart game</span>
        </div>
      ) : (
        getTurnMessage(player)
      )}
    </div>
  );
};
