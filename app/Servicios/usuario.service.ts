import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuarios } from '../models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiURL = "https://localhost:7199/api";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 

    this.GetListadoUsuarios();
  }


  GetListadoUsuarios(): Observable<usuarios[]> {
  
    return this.httpClient.get<usuarios[]>(this.apiURL + '/Usuarios')
    
  }

  InsertarUsuario(Data:usuarios): Observable<usuarios> {
  
    return this.httpClient.post<usuarios>(this.apiURL + '/Usuarios/',Data)
    
  }
  ActualizarUsuario(Id:number,Data:usuarios): Observable<usuarios> {
  
    return this.httpClient.put<usuarios>(this.apiURL + '/Usuarios/'+Id,Data)
    
  }
  DeleteUsuario(Id:number): Observable<number> {
  
    return this.httpClient.delete<number>(this.apiURL + '/Usuarios/'+Id)
    
  }
}
