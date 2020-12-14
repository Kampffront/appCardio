import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';


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





  






  constructor(private router : Router) { }

  ngOnInit(): void {
    
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
