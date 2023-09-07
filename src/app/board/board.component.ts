import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from '../cell/cell.component';
import { Cell } from '../cell';
import { GameService } from '../game.service';

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
    <button class="restart" (click)="restart()">
      New Game!
    </button>
    <div class="winner">{{gameService.winMessage}}</div> 
  `,
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: Cell[];
  gameService: GameService = inject(GameService);
  
  constructor() {
    this.board = this.gameService.getBoard();
  }

  restart() {
    console.log("restart clicked")
    this.gameService.restart();
    this.board = this.gameService.getBoard();
  }
}
