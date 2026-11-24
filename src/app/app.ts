import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DbzModule } from './dbz/dbz-module';

@Component({
  imports: [DbzModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
