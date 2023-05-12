import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // A donde se va a mandar el componente TypeScript en este caso a app comoponent html , que a la vez e
  //este se manda al index por el nombre del selector : 'app-root'
  styleUrls: ['./app.component.css'] // Que estilo utiliza este componente
})
export class AppComponent {
  title = 'Hola Mundo ';
  Ejemplo = 'Este es un ejemplo';
}
