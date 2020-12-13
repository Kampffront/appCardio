import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';


@Component({
  selector: 'app-resultados-imc',
  templateUrl: './resultados-imc.component.html',
  styleUrls: ['./resultados-imc.component.css']
})
export class ResultadosImcComponent implements OnInit {

  
  //pendiente mostrar resultado
  public imcMostrar : number = 0;
  






  constructor() { }

  ngOnInit(): void {
    
  }

   



  



  //resultado : SocioDatos ;

}
