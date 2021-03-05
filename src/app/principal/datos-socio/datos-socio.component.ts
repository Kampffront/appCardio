
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datosvariables } from 'src/app/models/datosvariables';
import { ResultadostotalService } from 'src/app/resultadostotal.service';


@Component({
  selector: 'app-datos-socio',
  templateUrl: './datos-socio.component.html',
  styleUrls: ['./datos-socio.component.css']
})


export class DatosSocioComponent implements OnInit {

  tieneHijos= false;

  model1 : Datosvariables = { 
  
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
  eps: '',
  zonaResidencia:'',
  direccion: '',
  estudiaActual: '',
  trabajaActual: '',
  tieneHijos :'',
  cantidadHijos: 0,
  dependenciaPadres: '',

//segunda parte; tamizaje

  peso: 0,
  altura: 0,
  resultadoImc: 0,
  interpretacionImc: '',

  descripcionImc:  ''
  }

  constructor(private router : Router, public datoSocio : ResultadostotalService) { }

  ngOnInit(): void {

    this.model1 = this.datoSocio.model;

  }
   

  mostrarResultado(){

    console.log("Resultado");
    //ingresando y mostrando valores para calcular y determinar riesgo
    this.model1.resultadoImc=this.datoSocio.numbercalcularImc(this.model1.peso, this.model1.altura);
    this.model1.interpretacionImc=this.datoSocio.determinarRiesgoSobrePeso(this.model1.resultadoImc);
    this.model1.descripcionImc=this.datoSocio.determinarDescripcionImc(this.model1.interpretacionImc);
    
    

  }



  public clickAnterior(){

    this.router.navigate(['encuestaUno']);

  }

  clickSiguiente(){
    console.log(this.model1);
    

  this.router.navigate(['resultadoImc']);
  }

}
