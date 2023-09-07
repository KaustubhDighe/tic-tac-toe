import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cell } from '../cell';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="cell" (click) = "handleClick()">
      {{cell.player}}
    </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() cell!: Cell;
  gameService: GameService = inject(GameService);

  handleClick() {
     console.log(this.cell);
     this.gameService.onPlay(this.cell.row, this.cell.col);
  }
}
