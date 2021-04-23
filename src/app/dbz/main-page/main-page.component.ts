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

   
  constructor(){
  }

}
