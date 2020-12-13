import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';


@Component({
  selector: 'app-resultados-imc',
  templateUrl: './resultados-imc.component.html',
  styleUrls: ['./resultados-imc.component.css']
})
export class ResultadosImcComponent implements OnInit {

  
  //pendiente mostrar resultado
  public imcMostrar : number = 0;
  






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
