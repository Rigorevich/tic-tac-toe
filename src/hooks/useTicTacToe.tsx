import { useCallback, useEffect, useState } from 'react';

import { getFilledBoard, type BoardType } from '../utils/board';
import { calculateWinner, getNextTurn, type GameResultType } from '../utils/game';

export type TurnType = 'cross' | 'zero';
export type SquareType = 'cross' | 'zero' | null;
export type ScoreType = Record<'cross' | 'zero' | 'tie', number>;
export type MoveType = { board: BoardType; turn: TurnType };

const defaultBoard = getFilledBoard();
const defaultScore = { cross: 0, zero: 0, tie: 0 };

export const useTicTacToe = () => {
  const [board, setBoard] = useState<BoardType>(defaultBoard);
  const [score, setScore] = useState<ScoreType>(defaultScore);
  const [moves, setMoves] = useState<MoveType[]>([]);
  const [turn, setTurn] = useState<TurnType>('cross');
  const [gameResult, setGameResult] = useState<GameResultType | null>(null);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number | null>(null);

  const updateScore = useCallback(() => {
    if (gameResult) {
      setScore((prev) => ({
        ...prev,
        [gameResult.result]: prev[gameResult.result] + 1,
      }));
    }
  }, [gameResult]);

  const resetGame = useCallback(() => {
    const initialTurn = moves[0]?.turn || 'cross';

    updateScore();
    setBoard(defaultBoard);
    setMoves([]);
    setTurn(getNextTurn(initialTurn));
    setGameResult(null);
    setCurrentMoveIndex(null);
  }, [moves, updateScore]);

  const handleJumpToMove = useCallback(
    (index: number) => {
      const move = moves[index];

      if (move) {
        setBoard(move.board);
        setTurn(getNextTurn(move.turn));
        setCurrentMoveIndex(index);
        setGameResult(null);
      }
    },
    [moves]
  );

  const handleClickSquare = useCallback(
    (key: string) => {
      if (board[key] || gameResult) {
        if (gameResult) resetGame();
        return;
      }

      const updatedBoard = { ...board, [key]: turn };
      const newMove: MoveType = { board: updatedBoard, turn: turn };

      setMoves((prev) =>
        currentMoveIndex !== null
          ? [...prev.slice(0, currentMoveIndex + 1), newMove]
          : [...prev, newMove]
      );

      setBoard(updatedBoard);
      setTurn(getNextTurn(turn));
      setCurrentMoveIndex(null);
    },
    [board, gameResult, turn, currentMoveIndex, resetGame]
  );

  useEffect(() => {
    const result = calculateWinner(board);

    if (result) {
      setGameResult(result);
    }
  }, [board]);

  return {
    board,
    turn,
    moves,
    gameResult,
    score,
    handleClickSquare,
    handleJumpToMove,
  };
};
