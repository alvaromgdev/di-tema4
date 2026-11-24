import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  fuerza: number;
}

@Component({
  standalone: false,
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {

  public personajes: Personaje[] = [
    { nombre: 'Goku', fuerza: 10000 },
    { nombre: 'Vegeta', fuerza: 9500 },
    { nombre: 'Yamsha', fuerza: 500 }
  ];

}
