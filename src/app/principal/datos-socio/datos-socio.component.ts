import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-datos-socio',
  templateUrl: './datos-socio.component.html',
  styleUrls: ['./datos-socio.component.css']
})
export class DatosSocioComponent implements OnInit {

  

  edad: number = 0;
  nombre: string ='';
  tipoDoc: string ='';
  cedulanum: number = 0;
  genero: string = '';
  telefono: number =  0;
  estadoCivil: string = '';
  nivelEducativo: string ='';
  estrato: string ='';
  regimenSalud: string ='';
  zonaResidencia: string ='';
  direccion: string = '';
  estudiaActual: string = '';
  trabajaActual: string = '';
  tieneHijos: string ='';
  cantidadHijos: number = 0;
  dependenciaPadres:  string ='';

//segunda parte tamizaje

  peso: number = 0;
  altura: number = 0;
  resultadoImc: number = 0;
  interpretacionImc: string =  '';

  descripcionImc: string =  '';


 



  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  

  submit(){
    console.log(this);
    console.log("Resultado");
    //ingresando y mostrando valores para calcular y determinar riesgo
    this.resultadoImc=this.numbercalcularImc(this.peso, this.altura);
    this.interpretacionImc=this.determinarRiesgoSobrePeso(this.resultadoImc);

  
    console.log("IMC :"+this.resultadoImc);// resultado imc con nombre 
    console.log("Interpretacion: "+this.interpretacionImc);// intepretacion
    console.log("Usted tiene un peso ..."+this.descripcionImc);//  descripcion
    
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
