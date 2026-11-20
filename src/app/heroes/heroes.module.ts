import { NgModule } from '@angular/core';

import { Heroe } from './components/heroe/heroe';
import { Lista } from './components/lista/lista';

@NgModule({
  declarations: [
    Heroe,
    Lista
  ],
  exports: [
    Heroe,
    Lista
  ]
})
export class HeroesModule {

}
