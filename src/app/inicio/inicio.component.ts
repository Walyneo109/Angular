import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
   productos=[ {
    imagen:'./assets/silla.jpg',
    nombre:'Silla de caño ',
    descripcion:'Silla de caño con asiento de bratina ',
    precio:18000,
    material:'caño' },
    
    {
      imagen:'./assets/silla2.jpg',
      nombre:'Silla de caño economica',
      descripcion:'Silla de caño con asiento de bratina ',
      precio:13000,

    }
   ]


 constructor(){ }
 ngOnInit(){ }
  }
