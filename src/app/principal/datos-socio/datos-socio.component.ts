
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



  constructor(private router : Router, public datoSocio : ResultadostotalService) { }

  ngOnInit(): void {

    this.model1 = this.datoSocio.model;

  }
   

  mostrarResultado(){

    console.log(this);
    console.log("Resultado");
    //ingresando y mostrando valores para calcular y determinar riesgo
    this.model1.resultadoImc=this.numbercalcularImc(this.model1.peso, this.model1.altura);
    this.model1.interpretacionImc=this.determinarRiesgoSobrePeso(this.model1.resultadoImc);

  
    console.log("IMC :"+this.model1.resultadoImc);// resultado imc con nombre 
    console.log("Interpretacion: "+this.model1.interpretacionImc);// intepretacion
    console.log(this.model1.descripcionImc);//  descripcion
  }

   numbercalcularImc(peso: number, altura: number){

    let resultado: number;
    resultado = peso/ Math.pow(altura,2);

 return resultado;
 

   }

   determinarRiesgoSobrePeso (imc :number){
 
    if (imc < 18.5){
          
      this.model1.descripcionImc =  "Usted tiene bajo peso. Son diversas las causas de bajo peso y  por eso le sugerimos que visite a su médico para recibir la  orientación profesional correspondiente."; 
           return "bajo peso";
      
                  } else if(imc >=18.5 && imc <= 24.9){
                    this.model1.descripcionImc =  "Usted tiene un peso normal. Controle su peso mensualmente, haga ejercicio de manera regular e incluya el consumo de frutas y  verduras en su alimentación diaria y disminuya el consumo de  sal, azúcares, grasas saturadas y grasas trans.";
                     return "peso normal";
                  } else if(imc >=25 && imc <= 29.9){
                    this.model1.descripcionImc =  "Usted tiene sobrepeso. Esto indica un peso no saludable y una acumulación excesiva de grasa en el cuerpo. Tenga en cuenta que el sobrepeso está relacionado con enfermedades como la diabetes, la hipertensión, el infarto, la trombosis, la artritis y algunos tipos de cánceres como el cáncer de mama y el cáncer de colon. Le recomendamos hacer ejercicio de manera regular e incluir alimentos naturales y frescos como las frutas y las verduras en su alimentación diaria; disminuya el consumo de sal, azúcares, grasas saturadas y grasas trans. Visite a su  médico para recibir la orientación profesional correspondiente";
                    return "sobre peso";
                  }else if(imc >=30 && imc <= 34.9){
                    this.model1.descripcionImc = "Usted sufre de obesidad, lo cual indica un rango de peso no saludable y una acumulación excesiva de grasa en el cuerpo. Tenga en cuenta que la obesidad está relacionada con enfermedades como la diabetes, la hipertensión, el infarto, la trombosis, la artritis y algunos tipos de cánceres como el cáncer de mama y el cáncer de colon. Le recomendamos hacer ejercicio de forma regular e incluir en su alimentación diaria alimentos naturales y frescos como las frutas y las verduras; disminuya el consumo de sal, azúcares, grasas saturadas y grasas trans, que generalmente están presentes en los alimentos procesados y ultraprocesados. Visite a su médico para recibir la orientación  profesional correspondiente.";
                   return "Obesidad clase 1";
                  }else if(imc >=35 && imc <= 39.9){
                    this.model1.descripcionImc = "Usted sufre de obesidad, lo cual indica un rango de peso no saludable y una acumulación excesiva de grasa en el cuerpo. Tenga en cuenta que la obesidad está relacionada con enfermedades como la diabetes, la hipertensión, el infarto, la trombosis, la artritis y algunos tipos de cánceres como el cáncer de mama y el cáncer de colon. Le recomendamos hacer ejercicio de forma regular e incluir en su alimentación diaria alimentos naturales y frescos como las frutas y las verduras; disminuya el consumo de sal, azúcares, grasas saturadas y grasas trans, que generalmente están presentes en los alimentos procesados y ultraprocesados. Visite a su médico para recibir la orientación  profesional correspondiente.";
                  return "Obesidad clase 2";
                  }else if (imc >=40){
                    this.model1.descripcionImc = "Usted sufre de obesidad, lo cual indica un rango de peso no saludable y una acumulación excesiva de grasa en el cuerpo. Tenga en cuenta que la obesidad está relacionada con enfermedades como la diabetes, la hipertensión, el infarto, la trombosis, la artritis y algunos tipos de cánceres como el cáncer de mama y el cáncer de colon. Le recomendamos hacer ejercicio de forma regular e incluir en su alimentación diaria alimentos naturales y frescos como las frutas y las verduras; disminuya el consumo de sal, azúcares, grasas saturadas y grasas trans, que generalmente están presentes en los alimentos procesados y ultraprocesados. Visite a su médico para recibir la orientación  profesional correspondiente.";
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
