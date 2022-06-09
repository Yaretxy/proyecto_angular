import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';
import { LoginComponent } from './login/login.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { ModalComponent } from './modal/modal.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path:'mascotas',component:MascotasComponent},
  {path:'Agregar', component:AgregarMascotasComponent},
  {path:'adopcion', component:ModalComponent},
  {path:'tablaAdopciones', component:TablaComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
