import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadostotalService } from 'src/app/resultadostotal.service';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';


@Component({
  selector: 'app-resultados-imc',
  templateUrl: './resultados-imc.component.html',
  styleUrls: ['./resultados-imc.component.css']
})
export class ResultadosImcComponent implements OnInit {



  
  //pendiente mostrar resultado

  //pendiente mostrar resultado
  public imcMostrar : number =0;
  public pesoMostrar : number = 0;
  public estatura : number = 0;




  constructor(private router : Router, public resultadoServicio : ResultadostotalService) { }

  ngOnInit(): void {

    this.imcMostrar = this.resultadoServicio.model.resultadoImc;
    this.pesoMostrar = this.resultadoServicio.model.peso;
    this.estatura = this.resultadoServicio.model.altura;

    
  }

  //funcion boton para ir a pagina anterior
  public clickAnterior(){

    this.router.navigate(['encuestaUno']);
    
  }


  //funcion boton para ir a pagina siguiente
  clickSiguiente(){

    this.router.navigate(['parteCardio']);
  }

   


}
