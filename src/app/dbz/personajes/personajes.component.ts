import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
 
})
export class PersonajesComponent  {
  @Input() personajes: personaje[]=[];

  constructor(private dbzService: DbzService){

  }

}
