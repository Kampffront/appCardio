import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';

@Component({
  selector: 'app-tamizaje',
  templateUrl: './tamizaje.component.html',
  styleUrls: ['./tamizaje.component.css']
})
export class TamizajeComponent  implements OnInit  {

  

  
 
  constructor(private router : Router ) { }

  ngOnInit(): void {
  }




  public clickAnterior(){

    this.router.navigate(['parteUno']);
    
  }

  clickSiguiente(){

    this.router.navigate(['parteTamizaje']);
  }

  submit(){

    
   
  }



}
