import { Component } from '@angular/core';

import { HeroesModule } from './heroes/heroes.module';

@Component({
  imports: [HeroesModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
