import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadostotalService } from 'src/app/resultadostotal.service';


@Component({
  selector: 'app-resultados-diabetescardio',
  templateUrl: './resultados-diabetescardio.component.html',
  styleUrls: ['./resultados-diabetescardio.component.css']
})
export class ResultadosDiabetescardioComponent implements OnInit {
  
  //variables informativas diabetes
  public PuntajeMuestra : number = 0;
  public nivelRiesgoDiabetesMuestra : string ="";
  public descripcionDiabetesMuestra : string ="";
  
  
  //variables informativas riesgo cardiovascular
  public riesgoCardioPorcentajeMuestra : string = "";
  public nivelRiesgoCardioMuestra : string ="";
  public colorFinal : string="";
  public descripcionNivelRiesgoCardio : string ="";

  



  constructor(private router : Router,private servicio : ResultadostotalService) { 


     }

  ngOnInit(): void {// se inicializan los valores con los valores del servicio
    
     //valores diabetes para sacar resultados
     this.servicio.sumarPuntajesResultadoDiabetes(this.servicio.puntajeDiabetes);// se ingresa el puntaje obtenido para mostrarlo
     this.PuntajeMuestra=this.servicio.puntajeDiabetes.puntajeDiabetesTotal;
     this.servicio.resultadoInformacionRiesgoDiabetes(this.PuntajeMuestra);
     this.nivelRiesgoDiabetesMuestra = this.servicio.nivelRiesgoDiabetesMuestra;
     this.descripcionDiabetesMuestra = this.servicio.descripcionDiabetesMuestra;

     

     


    //valores cardio para sacar resultados
    this.descripcionNivelRiesgoCardio = this.servicio.descripcionNivelRiesgoCardio;
    this.colorFinal=this.servicio.asignarColorFinal();
    this.riesgoCardioPorcentajeMuestra = this.servicio.mostrarRiesgoCardioPorcentaje(this.colorFinal);
    this.descripcionNivelRiesgoCardio = this.servicio.mostrarRiesgoCardioDescripcion(this.riesgoCardioPorcentajeMuestra);
    
    this.servicio.resultadoNivelRiesgoCardio = this.riesgoCardioPorcentajeMuestra;
    this.servicio.descripcionNivelRiesgoCardio = this.descripcionNivelRiesgoCardio;
    console.log(this.servicio);
  }


  finalEncuesta(){
    let datosVariables= this.servicio.model;
    let datosCardio = this.servicio.datosCardio;
    let puntajeDiabetes = this.servicio.puntajeDiabetes;
    let resultadoNivelRiesgoCardio = this.servicio.resultadoNivelRiesgoCardio;
    let descripcionNivelRiesgoCardio = this.servicio.descripcionNivelRiesgoCardio;
    let nivelRiesgoDiabetesMuestra = this.servicio.nivelRiesgoDiabetesMuestra;
    let descripcionDiabetesMuestra = this.servicio.descripcionDiabetesMuestra;

    const resultadostotales= {
      datosVariables,
      datosCardio,
      puntajeDiabetes,
      resultadoNivelRiesgoCardio,
      descripcionNivelRiesgoCardio,
      nivelRiesgoDiabetesMuestra,
      descripcionDiabetesMuestra,

   }


    
    //llamando al metodo del servicio para agregar los datos al arreglo.
     this.servicio.agregarDatosEntrevistado(
       datosVariables,
       datosCardio,
       puntajeDiabetes,
       resultadoNivelRiesgoCardio,
       descripcionNivelRiesgoCardio,
       nivelRiesgoDiabetesMuestra,
       descripcionDiabetesMuestra,
     );

     // llamando al metodo para agregar una nueva instancia del arreglo al local storage
     console.log(this.servicio.arregloEntrevistados[this.servicio.sigId]=resultadostotales);
     this.servicio.setLocalStorageArreglo(this.servicio.arregloEntrevistados);


     console.log(resultadostotales);



    
  if (this.servicio.identificador<1000) {// guardar en el local storage
      let incremento=localStorage.length;// aumenta el key del localstorage
     this.servicio.identificador=incremento;
       let identificadorString = this.servicio.identificador
      localStorage.setItem(""+identificadorString, JSON.stringify(resultadostotales));
       
    } else {
       
    }
    






//console.log(resultadoTotal);
 this.router.navigate(['principal']);
  }

  clickAnterior(){

    this.router.navigate(['parteCardio']);
  }

}
