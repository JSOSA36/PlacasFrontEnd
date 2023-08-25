import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { vehiculos } from '../models/vehiculos.model';
import { tipovehiculos } from '../models/tipovehiculos.models';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiURL = "https://localhost:7199/api";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

 
}
constructor(private httpClient: HttpClient) { }

GetListadoVehiculos(): Observable<vehiculos[]> {
  
  return this.httpClient.get<vehiculos[]>(this.apiURL + '/Vehiculo')
  
}
InsertarVehiculos(Data:vehiculos): Observable<vehiculos> {
  
   
  return this.httpClient.post<vehiculos>(this.apiURL + "/Vehiculo",Data)
  
}
ActualizarVehiculo(Id:number,Data:vehiculos): Observable<vehiculos> {
  
   
  return this.httpClient.put<vehiculos>(this.apiURL + "/Vehiculo/"+Id,Data)
  
}
GetTipoVehiculos(): Observable<tipovehiculos[]> {
  
  return this.httpClient.get<tipovehiculos[]>(this.apiURL + '/TipoVehiculos')
  
}
DeleteVehiculo(Id:number): Observable<number> {
  
  return this.httpClient.delete<number>(this.apiURL + '/Vehiculo/'+Id)
  
}
}
