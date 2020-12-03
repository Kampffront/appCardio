import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta-uno',
  templateUrl: './encuesta-uno.component.html',
  styleUrls: ['./encuesta-uno.component.css']
})
export class EncuestaUnoComponent implements OnInit {
  public tituloEncuestaUno: String="Título Informativo Respecto a la encuesta";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public clickAnterior(){

    this.router.navigate(['principal']);


    
  }

  clickSiguiente(){
    this.router.navigate(['parteUno']);
  }


}
