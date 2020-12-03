import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocioDatos } from 'src/app/models/socio-datos';

@Component({
  selector: 'app-tamizaje',
  templateUrl: './tamizaje.component.html',
  styleUrls: ['./tamizaje.component.css']
})
export class TamizajeComponent implements OnInit {




 
  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  public clickAnterior(){

    this.router.navigate(['encuestaUno']);


    
  }

  clickSiguiente(){

    this.router.navigate(['parteTamizaje']);
  }


}
