import { Injectable } from '@angular/core';
import { Cell } from './cell';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  findWinner(board: Cell[]) : string | undefined {
    const winningPositions: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(const position of winningPositions) {
      const cell = board[position[0]];
      if(!cell.played) continue;
      const player = cell.player;
      if(board[position[1]].player == player
        && board[position[2]].player == player) {
          return player;
        }
    }
    return undefined;
  }
}
