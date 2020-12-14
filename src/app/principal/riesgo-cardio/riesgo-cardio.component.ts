import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';

@Component({
  selector: 'app-riesgo-cardio',
  templateUrl: './riesgo-cardio.component.html',
  styleUrls: ['./riesgo-cardio.component.css']
})
export class RiesgoCardioComponent implements OnInit {

  constructor(private router : Router) {

  }

  perAbdominal: number = 0;
  tensionArterial: number =0;
  ejercicioDiario: string = '';

  consumoVerduras: string =  '';
  tieneHtensionArt: string =  '';

  tomaMedicamentos: string =  '';
 nivelAzucar: string =  '';
 familiarDiabetes: string = '';
  diabetico: string = '';
  fuma: string =  '';

  ngOnInit(): void {
  }

  

}
