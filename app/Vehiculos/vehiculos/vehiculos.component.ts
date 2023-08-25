import { Component } from '@angular/core';
import { vehiculos } from 'src/app/models/vehiculos.model';
import { ParametrosService } from 'src/app/Servicios/parametros.service';
import { VehiculosService } from 'src/app/Servicios/vehiculos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {


  _Vehiculos:vehiculos[]=[];

 constructor(private _vehiculoservices:VehiculosService,private parametro:ParametrosService,private router:Router)
 {
     this.GetListadoVehiculos();
 }
  GetListadoVehiculos()
  {
    this._vehiculoservices.GetListadoVehiculos().subscribe((res:vehiculos[]) => {
       
        console.log(res);
        this._Vehiculos=res;
      
     });
}
EditarVehiculo(vehiculo:vehiculos)
{
     this.parametro._Vehiculo=vehiculo;
     this.router.navigateByUrl('/vehiculoadd');
}
EliminarVehiculo(Id:number)
{
  this._vehiculoservices.DeleteVehiculo(Id).subscribe((res:number) => {
     
    this.GetListadoVehiculos();
     
    
   });
}

CallAddVehiculo()
{

  this.parametro._Vehiculo.ano="";
  this.parametro._Vehiculo.chasi="";
  this.parametro._Vehiculo.color="";
  this.parametro._Vehiculo.modelo="";
  this.parametro._Vehiculo.id=0;
  this.parametro._Vehiculo.idVehiculos=0;
  this.parametro._Usuario.id=0;
  this.router.navigateByUrl('/vehiculoadd');
}
}
