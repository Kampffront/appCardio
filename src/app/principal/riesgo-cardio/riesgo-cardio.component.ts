
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

  puntajeDiabetes2 : PuntajeDiabetes = {
    puntajeEdad : 0,
    puntajeImc :0,
    puntajePerAbdominal :0,
    puntajeActividadFisica :0,
    puntajeFrutasVerduras :0,
    puntajeMedicamentosHipertension :0,
    puntajeGlucosaAlto :0,
    puntajeFamiliarDiabetes:0,
    puntajeDiabetesTotal:0,
  }



  constructor(private router : Router, private datosCardioServicio:  ResultadostotalService,) {

  }


  ngOnInit(): void {

    this.usoDatosCardio = this.datosCardioServicio.datosCardio;
    this.puntajeDiabetes2= this.datosCardioServicio.puntajeDiabetes;
    


  }

  /// resultados riesgo diabetes por puntaje

  ////asignacion de puntajes , métodos

  /////puntaje total


  
    sumarPuntajesResultadoDiabetes(){
      this.puntajeDiabetes2.puntajeEdad=this.asignarPuntajeEdad(this.datosCardioServicio.model.edad);
      this.puntajeDiabetes2.puntajeImc=this.asignarPuntajeImc(this.datosCardioServicio.model.resultadoImc);
      this.puntajeDiabetes2.puntajePerAbdominal=this.asignarPuntajePerAbdominal(this.datosCardioServicio.datosCardio.perAbdominal,this.datosCardioServicio.model.genero);
      this.puntajeDiabetes2.puntajeActividadFisica=this.asignarPuntajeActiFisica(this.datosCardioServicio.datosCardio.ejercicioDiario);
      this.puntajeDiabetes2.puntajeFrutasVerduras=this.asignarPuntajeFrutasVerdu(this.datosCardioServicio.datosCardio.consumoVerduras);
      this.puntajeDiabetes2.puntajeMedicamentosHipertension=this.asignarPuntajeMedicamentosHiper(this.datosCardioServicio.datosCardio.tomaMedicamentos);
      this.puntajeDiabetes2.puntajeGlucosaAlto=this.asignarPuntajeGlucosaAlto(this.datosCardioServicio.datosCardio.nivelAzucar);
      this.puntajeDiabetes2.puntajeFamiliarDiabetes=this.asignarPuntajeFamiliaDiabetico(this.datosCardioServicio.datosCardio.familiarDiabetes);

      this.puntajeDiabetes2.puntajeDiabetesTotal=this.asignarPuntajeResultadoDiabetes(
      this.puntajeDiabetes2.puntajeEdad,
      this.puntajeDiabetes2.puntajeImc,
      this.puntajeDiabetes2.puntajePerAbdominal,
      this.puntajeDiabetes2.puntajeActividadFisica,
      this.puntajeDiabetes2.puntajeFrutasVerduras,
      this.puntajeDiabetes2.puntajeMedicamentosHipertension,
      this.puntajeDiabetes2.puntajeGlucosaAlto,
      this.puntajeDiabetes2.puntajeFamiliarDiabetes);
      console.log(this.puntajeDiabetes2.puntajeDiabetesTotal);
        
    }


  asignarPuntajeResultadoDiabetes(
    edad:number,
    imc: number,
    perAbdom: number,
    actFisica : number,
    frutasYver: number,
    medicamentoHiper: number,
    glucosaAlto: number,
    familiarDiabetes: number
    ){

      let puntajeTotal: number;
      return puntajeTotal= edad+imc+perAbdom+actFisica+frutasYver+medicamentoHiper+glucosaAlto+familiarDiabetes;
      

  }

  

  //puntaje edad
  asignarPuntajeEdad(edad: number){
    if (edad<45) {
      return 0;
    }
    //// se puede completar en caso de requerir mas edades
    return 0;
  }


  //puntajeImc
  asignarPuntajeImc(imc : number){
    if (imc<25) {
      return 0;
    }else if (imc>=25 && imc<=30) {
      return 1;
      
    } else if(imc>30) {
      return 3;
      
    }else{
      return 0;
    }
  }

  //puntaje perimetro abdominal
  asignarPuntajePerAbdominal(perabdominal : number, genero : string){
    let puntaje: number=0;
    if (genero=='masculino') {
     puntaje =this.puntajeHombre(perabdominal);
      
    } else {
      puntaje=this.puntajeMujer(perabdominal);
    }

    return puntaje;
  }

  ///// puntajes por  genero para perimetro abdominal
  puntajeHombre(perabdominal: number){
    let puntaje: number = 0;
    if (perabdominal<94) {
      puntaje = 0;
    }else{
      puntaje=4;
    }
    return puntaje;

  }

  puntajeMujer(perabdominal: number){
    let puntaje : number=0;
    if (perabdominal<90) {
      puntaje = 0;
    }else{
      puntaje=4;
    }
    return puntaje;

  }

  //////puntaje actividad fisica
  asignarPuntajeActiFisica(actividadFisica: string){
    let puntaje: number=0;
    if (actividadFisica=='si') {
      puntaje=0;
      
    } else {
      puntaje=2;
      
    }

    return puntaje;

  }

    //////puntaje Frutas y verduras
    asignarPuntajeFrutasVerdu(frutasVerdu: string){
      let puntaje: number=0;
      if (frutasVerdu=='tdias') {
        puntaje=0;
        
      } else {
        puntaje=1;
        
      }
  
      return puntaje;
  
    }

      //////puntaje  Medicamentos para hipertension
  asignarPuntajeMedicamentosHiper(puntajeMedicamentosHiper: string){
    let puntaje: number=0;
    if (puntajeMedicamentosHiper=='si') {
      puntaje=2;
      
    } else {
      puntaje=0;
      
    }

    return puntaje;

  }

    //////puntaje glucosa alto
    asignarPuntajeGlucosaAlto(glucosa: string){
      let puntaje: number=0;
      if (glucosa=='si') {
        puntaje=5;
        
      } else {
        puntaje=0;
        
      }
  
      return puntaje;
  
    }

        //////puntaje familia diabeticos /// mirar plantilla riesgo-cardio html
        asignarPuntajeFamiliaDiabetico(familiarDiabetico: string){
          let puntaje: number=0;
          if (familiarDiabetico=='no') {
            puntaje=0;
            
          } else if(familiarDiabetico=="si opcion padre") {
            puntaje=5;
            
          }else{
            puntaje=3;
          }
      
          return puntaje;
      
        }

  clickSiguiente(){
    this.router.navigate(['resultadoDiabetesCardio']);
    
    
  }


  

}
