import { Component } from "@angular/core";


@Component({
   
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls :  ['./personas.component.css']
    


})

export class PersonasComponent{

    deshabilitar = false
    mensaje = "No se ha agreado ninguna persona"
    titulo= " inge"
/*Property Binding 
Se asginan valores a los elementos del html a traves de Ts , en este caso se modifica el disabled de un boton que estan en html 
a traves de la variable deshabilitar boton : 
<button class="btn btn-primary" [disabled]="deshabilitar" (click)="agregarPersona()">Agregar Persona</button>
mientras deshabilitar sea  false el boton sera habilitado y si es true el elemnto disabled del button sera activo */
    agregarPersona(){

        this.mensaje="Persona Agregada"

        
    }
    
/*Event Binding 
Se modifica la variable titulo a traves de un evento en el html , mediante el input :
 <input type="text" class="form-control" (input)="modificarTitulo($event)"> en el html*/
    modificarTitulo(event: Event){

        this.titulo = (<HTMLInputElement>event.target).value



    }




}