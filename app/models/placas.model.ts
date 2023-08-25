import { clientes } from "./clientes.model";
import { tipoplacas } from "./tipoplacas.model";
import { vehiculos } from "./vehiculos.model";

export class placas
{
     idVentasPlacaHeader :number=0;
    idClientes:number=0;
    montoTotal:number=0;
    idTipoPlacas:number=0;
    idVehiculos:number=0;

    numeroPlaca:number=0;

    vehiculo:vehiculos=new vehiculos();
    tipoplcas:tipoplacas=new tipoplacas();
    cliente:clientes=new clientes();
}