import { Opmenu } from './interfaces/opmenu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones:Opmenu[]=[
    {
      link:'home',
      texto:'Inicio',
      icono: 'home'
    },
    {
      link:'autos',
      texto:'Vehículos',
      icono: 'car-sport'
    },
    {
      link:'viajes',
      texto:'Tus Viajes',
      icono: 'document-text'
    },
    {
      link:'crearviajes',
      texto:'Crear Viajes',
      icono: 'rocket'
    }

  ];
  constructor() {}
}
