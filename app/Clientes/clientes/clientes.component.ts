import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { usuarios } from 'src/app/models/usuarios';
import { Router } from '@angular/router';
import { ParametrosService } from 'src/app/Servicios/parametros.service';
import { clientes } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/Servicios/clientes.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private router:Router,private parametro:ParametrosService, private _ClienteServices:ClientesService)
  {
     this.GetListadoClientes();
    
  }
  ListadoClientes:clientes[]=[]
  




  GetListadoClientes()
{
  this._ClienteServices.GetListadoClientes().subscribe((res:clientes[]) => {
     
      console.log(res);
      this.ListadoClientes=res;
    
   });
}


CallAddClientes()
{

  
  this.router.navigateByUrl('/clientesadd');
}
}
