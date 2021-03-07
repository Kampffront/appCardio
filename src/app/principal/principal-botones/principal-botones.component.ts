import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal-botones',
  templateUrl: './principal-botones.component.html',
  styleUrls: ['./principal-botones.component.css']
})
export class PrincipalBotonesComponent implements OnInit {

  public titulo : String ="INSTRUMENTO PARA DETERMINAR EL RIESGO CARDIOVASCULAR Y METABÓLICO EN JÓVENES ENTRE 18 A 28 AÑOS";
  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public clickSiguiente(){

    this.router.navigate(['encuestaUno']);


    
  }


}
