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


  public riesgoDiabetesMuestra : number =0;
  public riesgoCardioPorcentajeMuestra : number = 0;
  public PuntajeMuestra : number = 0;
  public descripcionDiabetesMuestra : string ="";
  public nivelRiesgoMuestra : string ="";


  constructor(private router : Router,
    private puntajeDiabetesServicio : ResultadostotalService


     ) { }

  ngOnInit(): void {


  


  }


   

  finalEncuesta(){
    console.log(this.puntajeDiabetesServicio.puntajeDiabetes)

  // this.router.navigate(['principal']);
  }

  clickAnterior(){

    this.router.navigate(['parteCardio']);
  }

}
