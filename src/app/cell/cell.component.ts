import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="cell" (click) = "handleClick()">
      
    </button>
  `,
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  player: number;

  constructor() {
    this.player = 0;
  }

  handleClick() {
    this.player = (this.player + 1) % 2;
    
  }
}
