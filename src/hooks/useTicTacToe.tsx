import { useCallback, useState } from 'react';

import { getFilledBoard, type BoardType } from '../utils/board';
import { calculateWinner, getNextPlayer, type GameResult } from '../utils/game';

export type PlayerType = 'cross' | 'zero';
export type SquareType = 'cross' | 'zero' | null;
export type ScoreType = Record<'cross' | 'zero' | 'tie', number>;
export type MoveType = {
  board: BoardType;
  player: PlayerType;
};

export const defaultBoard = getFilledBoard();

export const useTicTacToe = () => {
  const [board, setBoard] = useState<BoardType>(defaultBoard);
  const [moves, setMoves] = useState<MoveType[]>([]);
  const [player, setPlayer] = useState<PlayerType>('cross');
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [score, setScore] = useState<ScoreType>({ cross: 0, zero: 0, tie: 0 });

  const resetGame = useCallback(() => {
    if (gameResult?.result) {
      setScore((prev) => ({ ...prev, [gameResult.result]: prev[gameResult.result] + 1 }));
    }

    setBoard(defaultBoard);
    setPlayer(moves[0].player === 'cross' ? 'zero' : 'cross');
    setMoves([]);
    setGameResult(null);
  }, [moves, gameResult]);

  const handleJumpToMove = useCallback(
    (index: number) => {
      setBoard(moves[index].board);
      setPlayer(getNextPlayer(moves[index].player));
      setMoves(moves.slice(0, index + 1));
      setGameResult(null);
    },
    [moves]
  );

  const handleClickSquare = useCallback(
    (key: string) => {
      if (gameResult || board[key]) {
        if (gameResult) resetGame();
        return;
      }

      const updatedBoard = { ...board, [key]: player };
      const info = calculateWinner(updatedBoard);

      if (info) {
        setGameResult(info);
      } else {
        setPlayer(getNextPlayer(player));
      }

      setMoves((prev) => [...prev, { board: updatedBoard, player: player }]);
      setBoard(updatedBoard);
    },
    [board, gameResult, player, resetGame]
  );

  return { board, player, moves, gameResult, score, handleClickSquare, handleJumpToMove };
};
