import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from '../cell/cell.component';

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
        <app-cell> </app-cell> 
        <app-cell> </app-cell> 
        <app-cell> </app-cell> 
      </div>
      <div class="board-row"> 
        <app-cell> </app-cell> 
        <app-cell> </app-cell> 
        <app-cell> </app-cell> 
      </div>
      <div class="board-row"> 
        <app-cell> </app-cell> 
        <app-cell> </app-cell> 
        <app-cell> </app-cell> 
      </div>
    </section>
  `,
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

}
