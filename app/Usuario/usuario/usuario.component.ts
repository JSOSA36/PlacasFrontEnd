import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { usuarios } from 'src/app/models/usuarios';
import { Router } from '@angular/router';
import { ParametrosService } from 'src/app/Servicios/parametros.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  
  constructor(private _UsuarioServices:UsuarioService,private router:Router,private parametro:ParametrosService)
  {
     this.GetListadoUsuarios();
     console.log( this.GetListadoUsuarios());
  }
  ListadoUsuarios:usuarios[]=[]
  


EditarUsuario(usuario:usuarios)
{
     this.parametro._Usuario=usuario;
     this.router.navigateByUrl('/usuarioadd');
}

  GetListadoUsuarios()
{
  this._UsuarioServices.GetListadoUsuarios().subscribe((res:usuarios[]) => {
     
      console.log(res);
      this.ListadoUsuarios=res;
    
   });
}
EliminarUsuario(Id:number)
{
  this._UsuarioServices.DeleteUsuario(Id).subscribe((res:number) => {
     
    this.GetListadoUsuarios();
     
    
   });
}

CallAddUsuario()
{

  this.parametro._Usuario.nombre="";
  this.parametro._Usuario.apellido="";
  this.parametro._Usuario.userName="";
  this.parametro._Usuario.passWord="";
  this.parametro._Usuario.id=0;
  this.router.navigateByUrl('/usuarioadd');
}
}
