import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','Hulk','Black Widow','Capitan America', 'QuickSilver']
  heroeBorrado: string ='';


  BorrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
