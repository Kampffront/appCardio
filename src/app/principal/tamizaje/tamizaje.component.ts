import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
