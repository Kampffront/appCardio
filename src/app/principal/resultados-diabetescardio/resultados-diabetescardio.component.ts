import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuntajeDiabetes } from 'src/app/models/puntajeDiabetes';
import { ResultadostotalService } from 'src/app/resultadostotal.service';
import { DatosSocioComponent } from '../datos-socio/datos-socio.component';
import { RiesgoCardioComponent } from '../riesgo-cardio/riesgo-cardio.component';

@Component({
  selector: 'app-resultados-diabetescardio',
  templateUrl: './resultados-diabetescardio.component.html',
  styleUrls: ['./resultados-diabetescardio.component.css']
})
export class ResultadosDiabetescardioComponent implements OnInit {

  puntajesDiabetes: PuntajeDiabetes = {

    puntajeEdad: 0,
    puntajeImc: 0,
    puntajePerAbdominal: 0,
    puntajeActividadFisica: 0,
    puntajeFrutasVerduras: 0,
    puntajeMedicamentosHipertension: 0,
    puntajeGlucosaAlto: 0,
    puntajeFamiliarDiabetes: 0,
    PuntajeResultadoDiabetes: 0
  }
  
  //variables necesarias para calcular el puntaje
    edad : number= 0;
    imc: number= 0;
    perAbdominal: number= 0;
    actividadFisica: string ="";
    frutasVerduras: string ="";
    medicamentosHipertension: string ="";
    glucosaAlto: string ="";
    familiarDiabetes: string ="";
    resultadoDiabetes: string ="";
    genero : string ="";
  constructor(private router : Router,
    private datosSocioServicio : ResultadostotalService,
     private datosCardioServicio : ResultadostotalService,
     private PuntajeServicio : ResultadostotalService
     ) { }

  ngOnInit(): void {

    this.edad = this.datosSocioServicio.model.edad;
    this.imc= this.datosSocioServicio.model.resultadoImc;
    this.perAbdominal =  this.datosCardioServicio.datosCardio.perAbdominal;
    this.actividadFisica = this.datosCardioServicio.datosCardio.ejercicioDiario;
    this.frutasVerduras = this.datosCardioServicio.datosCardio.consumoVerduras;
    this.medicamentosHipertension = this.datosCardioServicio.datosCardio.tomaMedicamentos;
    this.glucosaAlto = this.datosCardioServicio.datosCardio.nivelAzucar;
    this.familiarDiabetes = this.datosCardioServicio.datosCardio.familiarDiabetes;
    this.genero = this.datosSocioServicio.model.genero;

  }

  


 
  

  finalEncuesta(){

   this.router.navigate(['principal']);
  }

  clickAnterior(){

    this.router.navigate(['parteCardio']);
  }

}
