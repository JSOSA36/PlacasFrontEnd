import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Usuario/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioAddComponent } from './Usuario/usuario-add/usuario-add.component';
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";
import { ClientesComponent } from './Clientes/clientes/clientes.component';
import { ClienteaddComponent } from './Clientes/clienteadd/clienteadd.component';
import { VehiculosComponent } from './Vehiculos/vehiculos/vehiculos.component';
import { VehiculosAddComponent } from './Vehiculos/vehiculos-add/vehiculos-add.component';
import { PlacasComponent } from './Placas/placas/placas.component'; // <---

const routes: Routes = [

  
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuarioadd', component: UsuarioAddComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientesadd', component: ClienteaddComponent },
  { path: 'vehiculo', component: VehiculosComponent },
  { path: 'vehiculoadd', component: VehiculosAddComponent },
  { path: 'placas', component: PlacasComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    ClientesComponent,
    ClienteaddComponent,
    VehiculosComponent,
    VehiculosAddComponent,
    PlacasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
