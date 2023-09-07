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
          *ngFor="let cell of board.slice(0, 3)" [cell]="cell"> </app-cell> 
      </div>
      <div class="board-row"> 
      <app-cell
          *ngFor="let cell of board.slice(3, 6)" [cell]="cell"> </app-cell> 
      </div>
      <div class="board-row"> 
      <app-cell
          *ngFor="let cell of board.slice(6, 9)" [cell]="cell"> </app-cell> 
      </div>
    </section>
  `,
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: Cell[];
  player: number = 0;
  
  constructor() {
    this.board = new Array<Cell>(9);
    for(let i = 0; i < 9; i++) {
      this.board[i] = {
        player: "",
        played: false,
        row: i / 3,
        col: i % 3
      }
    }
  }
}
