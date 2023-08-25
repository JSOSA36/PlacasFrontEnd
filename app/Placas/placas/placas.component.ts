import { Component } from '@angular/core';
import { PlacasService } from 'src/app/Servicios/placas.service';
import { placas } from 'src/app/models/placas.model';

@Component({
  selector: 'app-placas',
  templateUrl: './placas.component.html',
  styleUrls: ['./placas.component.css']
})
export class PlacasComponent {
  Listadoplacas:placas[]=[]


constructor(private _Placaservices:PlacasService)
{
  this.ListadodePlacas();
}


ListadodePlacas()
{
  this._Placaservices.GetListadoplacas().subscribe((res:placas[]) => {
     
    console.log(res);
    this.Listadoplacas=res;
  
 });
}
}
  


