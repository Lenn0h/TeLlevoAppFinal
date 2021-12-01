import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  viajes=[{

    fecha:'22/09/2021',
    hora:'21:45 P.M',
    precio: '$3500',
    scrimagen:'../assets/images/mapaDC.jpg'
  },
  {

    fecha:'20/09/2021',
    hora:'22:15 P.M',
    precio: '$4000',
    scrimagen:'../assets/images/mapaDC.jpg'
  },
  {

    fecha:'15/09/2021',
    hora:'21:00 P.M',
    precio: '$2800',
    scrimagen:'../assets/images/mapaDC.jpg'
  },
  {

    fecha:'23/09/2021',
    hora:'22:50 P.M',
    precio: '$4500',
    scrimagen:'../assets/images/mapaDC.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
