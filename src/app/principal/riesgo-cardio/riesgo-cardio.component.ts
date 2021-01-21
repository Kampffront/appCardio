
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DatosCardio } from 'src/app/models/datos-cardio';
import { PuntajeDiabetes } from 'src/app/models/puntajeDiabetes';


import { ResultadostotalService } from 'src/app/resultadostotal.service';


@Component({
  selector: 'app-riesgo-cardio',
  templateUrl: './riesgo-cardio.component.html',
  styleUrls: ['./riesgo-cardio.component.css']
})
export class RiesgoCardioComponent implements OnInit {

  
  

  usoDatosCardio :DatosCardio = {

      //riesgo diabetes y cardio 

  perAbdominal: 0,
  tensionArterial:0,
  ejercicioDiario: '',

  consumoVerduras:  '',
  tieneHtensionArt:  '',

  tomaMedicamentos:  '',
  nivelAzucar:  '',
  familiarDiabetes: '',
  diabetico: '',
  fuma:  '',
  }

   puntaje : PuntajeDiabetes;

  


  constructor(private router : Router, private datosCardioServicio:  ResultadostotalService) {
    this.puntaje = this.datosCardioServicio.puntajeDiabetesServicio;

  }


  ngOnInit(): void {

    this.usoDatosCardio = this.datosCardioServicio.datosCardio;
    this.puntaje = this.datosCardioServicio.puntajeDiabetesServicio;


  }

  mostrarResultadoDiabetes(){
    this.datosCardioServicio.sumarPuntajesResultadoDiabetes(this.puntaje);

  }




  clickSiguiente(){
    // se ejecuta el meotdo para sumar todo lo almacenado en la encuesta de diabetes

    this.router.navigate(['resultadoDiabetesCardio']);
    
    
  }

  clickAnterior(){
    this.router.navigate(['resultadoImc']);
    
    
  }


  

}
