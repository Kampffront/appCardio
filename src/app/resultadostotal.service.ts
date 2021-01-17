import { Injectable } from '@angular/core';
import { Datosvariables } from './models/datosvariables';

@Injectable({
  providedIn: 'root'
})
export class ResultadostotalService {

  model : Datosvariables = { 
    edad: 0,
    nombre:'',
    tipoDoc:'',
    cedulanum: 0,
    genero: '',
    telefono:  0,
    estadoCivil: '',
    nivelEducativo:'',
    estrato:'',
    regimenSalud:'',
    zonaResidencia:'',
    direccion: '',
    estudiaActual: '',
    trabajaActual: '',
    tieneHijos :'',
    cantidadHijos: 0,
    dependenciaPadres: '',
  
  //segunda parte tamizaje
  
    peso: 0,
    altura: 0,
    resultadoImc: 0,
    interpretacionImc: '',
  
    descripcionImc:  ''
  
    }

  constructor() { }
}
