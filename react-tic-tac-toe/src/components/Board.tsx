import { useState } from 'react';
import Cell from './Cell';
import { checkWinner } from '../utils/check-winner';
import type { Player } from '../utils/check-winner';

export default function Board() {
  const [board, setBoard] = useState<Player[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | null>(null);

  function handleClick(row: number, col: number) {
    if (board[row][col] !== '') return;   // 이미 둔 자리는 무시

    const newBoard = board.map(row => [...row]); // 깊은 복사
    newBoard[row][col] = xIsNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setXIsNext(prev => !prev);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    }
  }

  function resetGame() {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setXIsNext(true);
    setWinner(null);
  }

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <h1 className='mt-10 text-2xl font-bold'>Tic Tac Toe</h1>
      {winner && (
        <div className="mt-4 text-lg text-green-600 font-semibold">
          Player {winner} wins!
          <button
            onClick={resetGame}
            className="ml-4 px-3 py-1 bg-blue-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      )}
      <div className="mt-10 flex flex-col items-center">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={cell}
                row={rowIndex}
                col={colIndex}
                handleClick={handleClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}