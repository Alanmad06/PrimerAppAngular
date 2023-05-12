import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  private nombre : string = 'Julio'
  private apellido : string = 'Perez'
  private edad : number = 28

  getEdad(){
    return this.edad;
  }
  getNombre(){
    return this.nombre;
  }
  getApellido(){
    return this.apellido;
  }


}
