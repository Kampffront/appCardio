import { Injectable } from '@angular/core';
import { DatosCardio } from './models/datos-cardio';
import { Datosvariables } from './models/datosvariables';
import { PuntajeDiabetes } from './models/puntajeDiabetes';

@Injectable({
  providedIn: 'root'
})


export class ResultadostotalService {

  //datos socio economicos , informacion agregada.
  model: Datosvariables = {
    edad: 0,
    nombre: '',
    tipoDoc: '',
    cedulanum: 0,
    genero: '',
    telefono: 0,
    estadoCivil: '',
    nivelEducativo: '',
    estrato: '',
    regimenSalud: '',
    zonaResidencia: '',
    direccion: '',
    estudiaActual: '',
    trabajaActual: '',
    tieneHijos: '',
    cantidadHijos: 0,
    dependenciaPadres: '',

    //segunda parte tamizaje

    peso: 0,
    altura: 0,
    resultadoImc: 0,
    interpretacionImc: '',

    descripcionImc: ''

  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  //datos cardio y demas, parte 2 , informacion agregada.
  datosCardio: DatosCardio = {
    perAbdominal: 0,
    tensionArterial: 0,
    ejercicioDiario: "",

    consumoVerduras: "",
    tieneHtensionArt: "",

    tomaMedicamentos: "",
    nivelAzucar: "",
    familiarDiabetes: "",
    diabetico: "",
    fuma: ""
  }
////////////////////////////////////////////////////////
  // resultados riesgo diabetes por puntaje
    puntajeDiabetes : PuntajeDiabetes = {
    puntajeEdad : this.asignarPuntajeEdad(this.model.edad),
    puntajeImc :this.asignarPuntajeImc(this.model.resultadoImc),
    puntajePerAbdominal :this.asignarPuntajePerAbdominal(this.datosCardio.perAbdominal, this.model.genero),
    puntajeActividadFisica :0,
    puntajeFrutasVerduras :0,
    puntajeMedicamentosHipertension :0,
    puntajeGlucosaAlto :0,
    puntajeFamiliarDiabetes:0,
    PuntajeResultadoDiabetes :0
  }

  ////asignacion de puntajes , métodos

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




  constructor() { }
}


