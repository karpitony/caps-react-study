export type Player = 'X' | 'O' | '';
export type Board = Player[][];

export function checkWinner(board: Board): Player | null {
  const size = board.length;
  const players: Player[] = ['X', 'O'];

  for (const player of players) {
    for (let i = 0; i < size; i++) {
      const rowWin = board[i].every(cell => cell === player);
      const colWin = board.every(row => row[i] === player);
      if (rowWin || colWin) return player;
    }

    const diag1Win = board.every((row, idx) => row[idx] === player);
    const diag2Win = board.every((row, idx) => row[size - 1 - idx] === player);
    if (diag1Win || diag2Win) return player;
  }

  return null;
}
