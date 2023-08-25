import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { placas } from '../models/placas.model';
@Injectable({
  providedIn: 'root'
})
export class PlacasService {


  private apiURL = "https://localhost:7199/api";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 

    
  }
  GetListadoplacas(): Observable<placas[]> {
  
    return this.httpClient.get<placas[]>(this.apiURL + '/Placas')
    
  }
}
