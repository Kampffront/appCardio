import { Component, OnInit } from '@angular/core';
import { ResultadostotalService } from 'src/app/resultadostotal.service';



@Component({
  selector: 'app-imagen-imc',
  templateUrl: './imagen-imc.component.html',
  styleUrls: ['./imagen-imc.component.css']
})
export class ImagenImcComponent implements OnInit {

  imc : number =0;

  constructor(private servicio : ResultadostotalService) { }

  ngOnInit(): void {

    this.imc = this.servicio.model.resultadoImc;


  }

  imagenNormal : string ="assets/ilustraciones/normal.jpg";
  imagenbajo : string ="assets/ilustraciones/bajo.jpg";
  imagenObeso : string ="assets/ilustraciones/obeso.jpg";
  imagenSobrepeso: string ="assets/ilustraciones/sobrePeso.jpg";
  
  

imagen : string ="assets/ilustraciones/bajo.jpg";



}
