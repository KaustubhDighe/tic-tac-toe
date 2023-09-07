import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from '../cell/cell.component';
import { Cell } from '../cell';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    CellComponent
  ],
  template: `
    <section class="board">
      <div class="board-row"> 
        <app-cell
          *ngFor="let cell of board[0]" [cell]="cell"> </app-cell> 
      </div>
      <div class="board-row"> 
      <app-cell
          *ngFor="let cell of board[1]" [cell]="cell"> </app-cell> 
      </div>
      <div class="board-row"> 
      <app-cell
          *ngFor="let cell of board[2]" [cell]="cell"> </app-cell> 
      </div>
    </section>
  `,
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: Cell[][] = [[]];
  constructor() {
    this.board = new Array<Cell[]>(3);
    for(let i = 0; i < 3; i++) {
      this.board[i] = new Array<Cell>(3);
      for(let j = 0; j < 3; j++) {
        this.board[i][j] = {text: "", x: i, y: j};
      }
    }
  }
}
