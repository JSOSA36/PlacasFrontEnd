import { tipopersona } from "./tipopersona.model";

export class clientes
{
    idClientes:number=0;
        cedula:string="";
        Nombre:string="";
        apellido:string="";
        fechaNacimiento:string="";
        idTipoPersona:number=0;
        tipoPersona:tipopersona=new tipopersona();
}