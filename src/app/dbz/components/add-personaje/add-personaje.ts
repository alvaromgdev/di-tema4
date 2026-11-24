import { Component } from '@angular/core';

@Component({
  selector: 'app-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.html'
})
export class AddPersonaje {

  public nombre: string = '';
  public poder: number = 0;

  agregarPersonaje(): void {

  }

}
