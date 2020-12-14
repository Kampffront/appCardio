import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCardio } from 'src/app/models/datos-cardio';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';

@Component({
  selector: 'app-riesgo-cardio',
  templateUrl: './riesgo-cardio.component.html',
  styleUrls: ['./riesgo-cardio.component.css']
})
export class RiesgoCardioComponent implements OnInit {

  modelo2 :DatosCardio = {

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

  constructor(private router : Router) {

  }



  ngOnInit(): void {
  }

  

  

}
