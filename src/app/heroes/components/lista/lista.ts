import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lista',
  styleUrl: './lista.css',
  templateUrl: './lista.html',
})
export class Lista {

  public nombresHeroes: string[] = [
    'Goku',
    'Vegeta',
    'Trunks',
    'Gohan',
    'Piccolo',
    'Krillin',
    'Yamcha',
    'Tien',
    'Chiaotzu',
    'Master Roshi'
  ];

}
