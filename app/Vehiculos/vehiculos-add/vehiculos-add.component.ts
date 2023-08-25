import { Component } from '@angular/core';

import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametrosService } from 'src/app/Servicios/parametros.service';
import { VehiculosService } from 'src/app/Servicios/vehiculos.service';
import { tipovehiculos } from 'src/app/models/tipovehiculos.models';
import { vehiculos } from 'src/app/models/vehiculos.model';
@Component({
  selector: 'app-vehiculos-add',
  templateUrl: './vehiculos-add.component.html',
  styleUrls: ['./vehiculos-add.component.css']
})
export class VehiculosAddComponent {
  profileForm:FormGroup

  _TipoVehiculos:tipovehiculos[]=[];
  constructor(private fb: FormBuilder,private router:Router,private parametro:ParametrosService,
    private _vehiculoservices:VehiculosService)
  {

    this.GetTiposVehiculos();
    if(parametro._Usuario==null)
    {
      this.profileForm=this.fb.group({
        modelo:[""],
        chasi:[""],
        color:[""],
        ano:[""],
        id:[""],
  
       })
    }
    else
    {
      this.profileForm=this.fb.group({
        modelo:[parametro._Vehiculo.modelo],
        chasi:[parametro._Vehiculo.chasi],
        color:[parametro._Vehiculo.color],
        ano:[parametro._Vehiculo.ano],
        id:[parametro._Vehiculo.id],
        })
     
  }}


  InsertarVeiculos()
  {
    
    if(this.parametro._Vehiculo.idVehiculos==0)
    {
      this._vehiculoservices.InsertarVehiculos(this.profileForm.value).subscribe((res:vehiculos) => {
       
        this.router.navigateByUrl('/vehiculo');
         
       });
    }
    else
    {
      this._vehiculoservices.ActualizarVehiculo(this.parametro._Vehiculo.idVehiculos,this.profileForm.value).subscribe((res:vehiculos) => {
       
        this.router.navigateByUrl('/vehiculo');
         
       });
    }
  }

  GetTiposVehiculos()
  {
    this._vehiculoservices.GetTipoVehiculos().subscribe((res:tipovehiculos[]) => {
       
        console.log(res);
        this._TipoVehiculos=res;
      
     });
}

}

