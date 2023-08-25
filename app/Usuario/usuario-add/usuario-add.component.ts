import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { usuarios } from 'src/app/models/usuarios';
import { ParametrosService } from 'src/app/Servicios/parametros.service';
@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent {

  profileForm:FormGroup

  //profileForm = new FormGroup({
    
    //nombre:  new FormControl(''),
   // apellido: new FormControl(''),
    //userName: new FormControl(''),
    //passWord:new FormControl(''),
    
    
  
  //});

  constructor(private _UsuarioServices:UsuarioService,private fb: FormBuilder,private router:Router,private parametro:ParametrosService)
  {
    if(parametro._Usuario==null)
    {
      this.profileForm=this.fb.group({
        Nombre:[""],
        Apellido:[""],
        UserName:[""],
        Password:[""],
  
       })
    }
    else
    {
      this.profileForm=this.fb.group({
        Nombre:[parametro._Usuario.nombre],
        Apellido:[parametro._Usuario.apellido],
        UserName:[parametro._Usuario.userName],
        Password:[parametro._Usuario.passWord],
        })
     
  }}

  InsertarUsuario()
  {
    
    if(this.parametro._Usuario.id>0)
    {
      this._UsuarioServices.ActualizarUsuario(this.parametro._Usuario.id,this.profileForm.value).subscribe((res:usuarios) => {
       
        this.router.navigateByUrl('/usuario');
         
       });
    }
    else
    {
      this._UsuarioServices.InsertarUsuario(this.profileForm.value).subscribe((res:usuarios) => {
       
        this.router.navigateByUrl('/usuario');
         
       });
    }
    
}
}
