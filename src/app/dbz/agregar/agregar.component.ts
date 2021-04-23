import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() nuevo: personaje = {
    nombre:'',
    poder:0
  }

  constructor(private dbzService: DbzService){}

  //@Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();


 agregar(){

  if(this.nuevo.nombre.trim().length === 0){return;}

   console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo);


   this.nuevo={
     nombre: '',
     poder:0
   }
 }

//App DBZ

}
