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

  // resultados riesgo diabetes por puntaje
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

  constructor() { }
}


