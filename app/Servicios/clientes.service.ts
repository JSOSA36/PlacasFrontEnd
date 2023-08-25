import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { clientes } from '../models/clientes.model';
import { tipopersona } from '../models/tipopersona.model';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiURL = "https://localhost:7199/api";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }


  GetListadoClientes(): Observable<clientes[]> {
  
    return this.httpClient.get<clientes[]>(this.apiURL + '/Clientes')
    
  }
  GetTipoPersona(): Observable<tipopersona[]> {
  
    return this.httpClient.get<tipopersona[]>(this.apiURL + '/TipoPersonas')
    
  }

  InsertarCliente(Data:clientes): Observable<clientes> {
  
   
    return this.httpClient.post<clientes>(this.apiURL + "/Clientes/",Data)
    
  }
}
