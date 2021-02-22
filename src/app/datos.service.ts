import { HttpClient } from '@angular/common/http';
import { getSourceFileOrError } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpclient : HttpClient) { }

  getUsers(){
    this.httpclient.get("holii").subscribe(data => {
      console.log(data);
    });
    console.log("esto se ejecuta primero");
  }
}

