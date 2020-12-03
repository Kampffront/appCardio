import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocioDatos } from 'src/app/models/socio-datos';

@Component({
  selector: 'app-datos-socio',
  templateUrl: './datos-socio.component.html',
  styleUrls: ['./datos-socio.component.css']
})
export class DatosSocioComponent implements OnInit {

  model : SocioDatos = {edad:0,nombre:'',
  tipoDoc:'',
  cedulanum:0,
  genero: '', //variable p4
  telefono: 0,// p5 variable 3
  estadoCivil: '', //p6
  nivelEducativo:'', ///p7
  estrato:'', //p8
  regimenSalud:'', //p9
  zonaResidencia:'', //p10
  direccion: '', //p11
  estudiaActual: '', //p12
  trabajaActual: '',//
  tieneHijos: '', //p13
  cantidadHijos:0,
  dependenciaPadres: '', //p14

//segunda parte tamizaje

  peso: 0,// pero en kg variable 4
  altura: 0, // en mts
  resultadoImc: 0, //variable 5
  interpretacionImc: '',
  descripcionImc: '',

  perAbdominal: 0, // en cms variable 6 aproximar
  tensionArterial:0,//  aproximar
  ejercicioDiario:'', //variable 7
  consumoVerduras: '',//variable 8
  tieneHtensionArt: '',
  tomaMedicamentos: '', //var 9
 nivelAzucar: '' , //var 10
 familiarDiabetes:'' , //var 11
  diabetico:'', //var 12
  fuma: '' //var 13
  };

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.model);
  }

  public clickAnterior(){

    this.router.navigate(['encuestaUno']);


    
  }

  clickSiguiente(){

    this.router.navigate(['parteTamizaje']);
  }

}
