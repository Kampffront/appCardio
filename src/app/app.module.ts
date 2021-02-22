import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

//utilidades
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PrincipalBotonesComponent } from './principal/principal-botones/principal-botones.component';
import { FormsModule } from '@angular/forms';
import { EncuestaUnoComponent } from './principal/encuesta-uno/encuesta-uno.component';
import { DatosSocioComponent } from './principal/datos-socio/datos-socio.component';
import { TamizajeComponent } from './principal/tamizaje/tamizaje.component';
import { ResultadosImcComponent } from './principal/resultados-imc/resultados-imc.component';
import { RiesgoCardioComponent } from './principal/riesgo-cardio/riesgo-cardio.component';
import { CommonModule } from '@angular/common';
import { ResultadostotalService } from './resultadostotal.service';
import { ResultadosDiabetescardioComponent } from './principal/resultados-diabetescardio/resultados-diabetescardio.component';
import { ImagenImcComponent } from './principal/imagen-imc/imagen-imc.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalBotonesComponent,
    EncuestaUnoComponent,
    DatosSocioComponent,
    TamizajeComponent,
    ResultadosImcComponent,
    RiesgoCardioComponent,
    ResultadosDiabetescardioComponent,
    ImagenImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    HttpClientModule
    
  ],
  providers: [ ResultadostotalService],
  bootstrap: [AppComponent],
  entryComponents : [DatosSocioComponent]// se va a crear de manera dinamica el componente y hay que informar por aca
})
export class AppModule { }
