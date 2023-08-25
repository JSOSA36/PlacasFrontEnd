import { Component } from '@angular/core';

import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/Servicios/clientes.service';
import { clientes } from 'src/app/models/clientes.model';
import { tipopersona } from 'src/app/models/tipopersona.model';

@Component({
  selector: 'app-clienteadd',
  templateUrl: './clienteadd.component.html',
  styleUrls: ['./clienteadd.component.css']
})
export class ClienteaddComponent {

  profileForm:FormGroup
  _TipoPersona:tipopersona[]=[];

  constructor(private fb: FormBuilder,private router:Router,private ClienteServices:ClientesService)
  {

    this.GetListaPersona();
    this.profileForm=this.fb.group({
      
      cedula:[""],
      apellido:[""],
      Nombre:[""],
      fechaNacimiento:[""],
      idTipoPersona:[""],

     })
  }

  InsertarCliente()
  {

    console.log(this.profileForm.get("idTipoPersona")?.value);
    this.ClienteServices.InsertarCliente(this.profileForm.value).subscribe((res:clientes) => {
       
      this.router.navigateByUrl('/clientes');
       
     });
  }
  GetListaPersona()
  {
    this.ClienteServices.GetTipoPersona().subscribe((res:tipopersona[]) => {
       
      this._TipoPersona=res;
      
       
     });
  }

}
