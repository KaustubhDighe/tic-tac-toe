import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cell } from '../cell';

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

  handleClick() { 
  }
}
