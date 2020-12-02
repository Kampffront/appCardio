import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeroListComponent } from './primero/primero-list/primero-list.component';
import { PrimeroFormComponent } from './primero/primero-form/primero-form.component';

//utilidades
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    PrimeroListComponent,
    PrimeroFormComponent
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
    MatIconModule


    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [ PrimeroFormComponent]// se va a crear de manera dinamica el componente y hay que informar por aca
})
export class AppModule { }
