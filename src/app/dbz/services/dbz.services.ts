import { Injectable } from "@angular/core";
import { personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzService{

    personajes: personaje[]= [
        {
          nombre: 'Goku',
          poder: 15000
      
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
    
      ];

constructor(){
    console.log('Servicio inicializado');
}
}