import { Component } from '@angular/core';

interface CentroEducativo {
  nombre: string;
  localidad: string;
  centrosFormativos: string[];
  logo: string;
}

@Component({
  selector: 'app-centro',
  styleUrl: './centro.css',
  templateUrl: './centro.html',
})
export class Centro {
  // Array con los datos de los centros educativos
  public centros: CentroEducativo[] = [
    {
      nombre: 'IES Playamar',
      localidad: 'Torremolinos',
      centrosFormativos: [
        'Desarrollo de Aplicaciones Multiplataforma',
        'Desarrollo de Aplicaciones Web'
      ],
      logo: '/ies-playamar.png'
    },
    {
      nombre: 'IES Jacaranda',
      localidad: 'Churriana',
      centrosFormativos: [
        'Cocina y Gastronomía',
        'Servicios en Restauración'
      ],
      logo: '/ies-jacaranda.png'
    }
  ];

  // Pila para almacenar los centros eliminados
  public pila: CentroEducativo[] = [];

  // Posición del centro seleccionado
  public posicion: number = 0;

  // Centro que se muestra actualmente
  public centroActual: CentroEducativo | null = this.centros[0] ?? null;

  // Método para avanzar al siguiente centro
  public posterior(): void {
    if (this.posicion < this.centros.length - 1) {
      this.posicion++;
      this.centroActual = this.centros[this.posicion] ?? null;
    }
  }

  // Método para retroceder al centro anterior
  public anterior(): void {
    if (this.posicion > 0) {
      this.posicion--;
      this.centroActual = this.centros[this.posicion] ?? null;
    }
  }

  // Método para eliminar el centro seleccionado
  public eliminar(): void {
    if (this.centroActual !== null) {
      // Guardamos el centro en la pila
      this.pila.push(this.centroActual);

      // Eliminamos el centro del listado
      this.centros.splice(this.posicion, 1);

      // Comprobamos si quedan centros
      if (this.centros.length === 0) {
        this.posicion = 0;
        this.centroActual = null;
      } else {

        // Si hemos eliminado el último, retrocedemos
        if (this.posicion >= this.centros.length) {
          this.posicion = this.centros.length - 1;
        }

        this.centroActual = this.centros[this.posicion] ?? null;
      }
    }
  }

  // Método para insertar el último centro eliminado
  public insertar(): void {
    if (this.pila.length > 0) {
      // Recuperamos el último centro de la pila
      const centroRecuperado: CentroEducativo | undefined = this.pila.pop();

      if (centroRecuperado !== undefined) {
        // Si no hay centros, empezamos por la posición 0
        if (this.centros.length === 0) {
          this.posicion = 0;
        }

        // Insertamos el centro en la posición actual
        this.centros.splice(this.posicion, 0, centroRecuperado);

        // Seleccionamos el centro insertado
        this.centroActual = centroRecuperado;
      }
    }
  }

  // Método para obtener los nombres de los centros de la pila
  public obtenerNombresPila(): string {
    let nombres: string = '';

    for (let i: number = 0; i < this.pila.length; i++) {
      nombres += this.pila[i].nombre;

      if (i < this.pila.length - 1) {
        nombres += ', ';
      }
    }

    if (nombres === '') {
      nombres = 'La pila está vacía';
    }

    return nombres;
  }
}
