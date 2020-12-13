import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosSocioComponent } from './principal/datos-socio/datos-socio.component';
import { EncuestaUnoComponent } from './principal/encuesta-uno/encuesta-uno.component';
import { PrincipalBotonesComponent } from './principal/principal-botones/principal-botones.component';
import { ResultadosImcComponent } from './principal/resultados-imc/resultados-imc.component';
import { TamizajeComponent } from './principal/tamizaje/tamizaje.component';


const routes: Routes = [

  {path : 'encuestaUno',component : EncuestaUnoComponent },
  {path : 'principal',component : PrincipalBotonesComponent },

  {path : '', component : PrincipalBotonesComponent},

  {path : 'parteUno', component : DatosSocioComponent},


  {path : 'parteTamizaje', component :  TamizajeComponent},
  {path : 'resultadoImc', component : ResultadosImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
