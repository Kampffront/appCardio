import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuntajeDiabetes } from 'src/app/models/puntajeDiabetes';
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


  public riesgoCardioPorcentajeMuestra : number = 0;
  public nivelRiesgoCardioMuestra : string ="";

  
  
  
  


  constructor(private router : Router,
    private puntajeDiabetesServicio : ResultadostotalService


     ) { }

  ngOnInit(): void {
    this.PuntajeMuestra= this.puntajeDiabetesServicio.puntajeDiabetes.puntajeDiabetesTotal;
    this.resultadoInformacionRiesgoDiabetes(this.PuntajeMuestra);


  


  }

  resultadoInformacionRiesgoDiabetes(puntajeDiabetes: number){
    if (puntajeDiabetes <10) {
      this.nivelRiesgoDiabetesMuestra="Bajo";
      this.descripcionDiabetesMuestra="¡Felicitaciones! Usted tiene un riesgo bajo para desarrollar diabetes. Le sugerimos que controle su peso regularmente, consuma frutas y verduras diariamente y practique al menos 30 minutos de actividad física con intensidad moderada por día,  para así mantener y mejorar su salud. ";
    } else if(puntajeDiabetes>=10 && puntajeDiabetes<=12){
      this.nivelRiesgoDiabetesMuestra="Medio";
      this.descripcionDiabetesMuestra="Usted tiene un riesgo moderado de tener diabetes y prediabetes. Sugerimos que considere aumentar su actividad física, mejorar sus hábitos de alimentación y prestar atención a su peso, para prevenir el desarrollo de diabetes. Los cambios  en su estilo de vida pueden prevenir completamente la diabetes  o al menos retrasar su inicio hasta edades ya muy avanzadas.";
    }else{
      this.nivelRiesgoDiabetesMuestra="Alto";
      this.descripcionDiabetesMuestra="Usted tiene un riesgo alto de tener diabetes y prediabetes. Sugerimos que usted pida una cita a su EPS o su médico para  que le realice una prueba de glicemia en ayuno y reciba  consejo sobre cómo cambiar sus hábitos de vida para mejorar  su salud.";
    }

    


  }


   

  finalEncuesta(){
    console.log(this.puntajeDiabetesServicio.puntajeDiabetes)

  this.router.navigate(['principal']);
  }

  clickAnterior(){

    this.router.navigate(['parteCardio']);
  }

}
