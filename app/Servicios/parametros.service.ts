import { Injectable } from '@angular/core';
import { usuarios } from '../models/usuarios';
import { vehiculos } from '../models/vehiculos.model';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor() { }

  public _Usuario:usuarios=new usuarios();
  public _Vehiculo:vehiculos=new vehiculos();
}
