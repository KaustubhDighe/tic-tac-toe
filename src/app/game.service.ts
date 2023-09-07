import { Injectable } from '@angular/core';
import { Cell } from './cell';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: Cell[] = [];
  players = ['X', 'O'];
  player = 0;
  winner: string = '';
  winMessage: string = '';
  numPlayed = 0;

  constructor() {
    this.restart();
  }

  restart() {
    this.board = new Array<Cell>(9);
    for(let i = 0; i < 9; i++) {
      this.board[i] = {
        player: "",
        played: false,
        row: i / 3 >> 0,
        col: i % 3
      }
    }
    console.log(this.board);
    this.winner = '';
    this.player = 0;
    this.numPlayed = 0;
    this.winMessage = '';
  }

  getBoard(): Cell[] {
    return this.board;
  }

  findWinner() : string | undefined {
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
      const cell = this.board[position[0]];
      if(!cell.played) continue;
      const player = cell.player;
      if(this.board[position[1]].player == player
        && this.board[position[2]].player == player) {
          return player;
        }
    }
    return undefined;
  }

  onPlay(row: number, col: number) {
    const cell = this.board[row * 3 + col];
    if(!cell.played && this.winner == '') {
      this.numPlayed++;
      cell.played = true;
      cell.player = this.players[this.player];
      this.player = (this.player + 1) % 2;
      
      const winner = this.findWinner();
      if(winner) {
        this.winner = winner;
        this.winMessage = `Player ${this.winner} WINS`;
      } else if(this.numPlayed == 9) {
        this.winMessage = "It's a DRAW";
      }
    }
  }
}
