import { Component, OnInit } from '@angular/core';
import { ResultadostotalService } from 'src/app/resultadostotal.service';



@Component({
  selector: 'app-imagen-imc',
  templateUrl: './imagen-imc.component.html',
  styleUrls: ['./imagen-imc.component.css']
})
export class ImagenImcComponent implements OnInit {

  imc : string ="";

  imagenNormal : string ="assets/ilustraciones/normal.jpg";
  imagenBajo : string ="assets/ilustraciones/bajo.jpg";
  imagenObeso : string ="assets/ilustraciones/obeso.jpg";
  imagenSobrepeso: string ="assets/ilustraciones/sobrePeso.jpg";

  imagen : string ="";
  

  constructor(private servicio : ResultadostotalService) { }

  ngOnInit(): void {

    this.imc = this.servicio.model.interpretacionImc;
    this.imagen = this.mostrarImagen();


  }

  mostrarImagen(){
    if (this.imc=="peso bajo") {
      return this.imagen = this.imagenBajo;
    } else if(this.imc=="peso normal"){
      return this.imagen = this.imagenNormal;
    } else if(this.imc=="sobre peso"){
     return  this.imagen = this.imagenSobrepeso;
    } else if(this.imc=="Obesidad clase 1" || this.imc=="Obesidad clase 2" || this.imc=="Obesidad clase 3" ){
     return  this.imagen = this.imagenObeso;  
    }else{
      return this.imagen = this.imagenNormal;
    }


  }

 
  
  





}
