import { useCallback, useState } from 'react';

import { getFilledBoard, type BoardType } from '../utils/board';
import { calculateWinner, getNextPlayer, type GameResultType } from '../utils/game';

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
  const [startingPlayer, setStartingPlayer] = useState<PlayerType>('cross');
  const [gameResult, setGameResult] = useState<GameResultType | null>(null);
  const [score, setScore] = useState<ScoreType>({ cross: 0, zero: 0, tie: 0 });

  const currentPlayer = moves.length % 2 === 0 ? startingPlayer : getNextPlayer(startingPlayer);

  const updateScore = useCallback(() => {
    if (gameResult?.result) {
      setScore((prevScore) => ({
        ...prevScore,
        [gameResult.result]: prevScore[gameResult.result] + 1,
      }));
    }
  }, [gameResult]);

  const resetGame = useCallback(() => {
    updateScore();
    setStartingPlayer((prev) => (prev === 'cross' ? 'zero' : 'cross'));
    setBoard(defaultBoard);
    setMoves([]);
    setGameResult(null);
  }, [updateScore]);

  const handleJumpToMove = useCallback(
    (index: number) => {
      if (index !== moves.length - 1) {
        setBoard(moves[index].board);
        setMoves(moves.slice(0, index + 1));
        setGameResult(null);
      }
    },
    [moves]
  );

  const handleClickSquare = useCallback(
    (key: string) => {
      if (gameResult || board[key]) {
        if (gameResult) resetGame();
        return;
      }

      const updatedBoard = { ...board, [key]: currentPlayer };
      const info = calculateWinner(updatedBoard);

      if (info) {
        setGameResult(info);
      }

      setMoves((prev) => [...prev, { board: updatedBoard, player: currentPlayer }]);
      setBoard(updatedBoard);
    },
    [board, gameResult, currentPlayer, resetGame]
  );

  return { board, currentPlayer, moves, gameResult, score, handleClickSquare, handleJumpToMove };
};
