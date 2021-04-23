import { Component, OnInit } from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  

  nuevo:personaje={
    nombre: "Maestro Roshi",
    poder: 1000

  }

  get personajes():personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(argumento:personaje){
    this.personajes.push(argumento);
  }
   
  constructor(private dbzService: DbzService){
  }

}
