import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BoardComponent,
  ],
  template: `
  <main>
    <header class="brand-name">
      TIC TAC TOE! THREE IN A ROW!
    </header>
    <section class="content">
      <app-board></app-board>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
