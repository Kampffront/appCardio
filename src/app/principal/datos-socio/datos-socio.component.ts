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
    console.log("Resultado");
    //ingresando y mostrando valores para calcular y determinar riesgo
    this.model.resultadoImc=this.numbercalcularImc(this.model.peso, this.model.altura);
    this.model.interpretacionImc=this.determinarRiesgoSobrePeso(this.model.resultadoImc);

  
    console.log("IMC :"+this.model.resultadoImc);// resultado imc con nombre 
    console.log("Interpretacion: "+this.model.interpretacionImc);// intepretacion
    console.log("Usted tiene un peso ..."+this.model.descripcionImc);//  descripcion
    
  }

   numbercalcularImc(peso: number, altura: number){

    let resultado: number;
    resultado = peso/ Math.pow(altura,2);

 return resultado;
 

   }

   determinarRiesgoSobrePeso (imc :number){
 
    if (imc < 18.5){
           
           return "bajo peso";
      
                  } else if(imc >=18.5 && imc <= 24.9){
                     return "peso normal";
                  } else if(imc >=25 && imc <= 29.9){
                    
                    return "sobre peso";
                  }else if(imc >=30 && imc <= 34.9){
                   return "Obesidad clase 1";
                  }else if(imc >=35 && imc <= 39.9){
                  return "Obesidad clase 2";
                  }else if (imc >=40){
                  return "Obesidad clase 3";
                  } 
                  return "no definido";              
                  
  }

  public clickAnterior(){

    this.router.navigate(['encuestaUno']);

  }

  clickSiguiente(){

    this.router.navigate(['parteTamizaje']);
  }

}
