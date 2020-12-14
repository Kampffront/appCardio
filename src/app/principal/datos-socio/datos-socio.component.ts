import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datosvariables } from 'src/app/models/datosvariables';


@Component({
  selector: 'app-datos-socio',
  templateUrl: './datos-socio.component.html',
  styleUrls: ['./datos-socio.component.css']
})
export class DatosSocioComponent implements OnInit {



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

  descripcionImc:  '',

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


  constructor(private router : Router) { }

  ngOnInit(): void {
  }
   

  




  

  submit(){

    
    console.log(this);
    console.log("Resultado");
    //ingresando y mostrando valores para calcular y determinar riesgo
    this.model.resultadoImc=this.numbercalcularImc(this.model.peso, this.model.altura);
    this.model.interpretacionImc=this.determinarRiesgoSobrePeso(this.model.resultadoImc);

  
    console.log("IMC :"+this.model.resultadoImc);// resultado imc con nombre 
    console.log("Interpretacion: "+this.model.interpretacionImc);// intepretacion
    console.log("Usted tiene un peso ..."+this.model.descripcionImc);//  descripcion

    return this.model;
    
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

    this.router.navigate(['resultadoImc']);
  }

}
