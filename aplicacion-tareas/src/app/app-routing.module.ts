
//angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { TareasFormComponent } from './components/tareas-form/tareas-form.component';

import {TareasListasComponent} from './components/tareas-listas/tareas-listas.component'


//declaramos nuestras routas es decir que componente se va a llamar al ejecutar dicha ruta
const routes: Routes = [
  {path: '', redirectTo: '/tareas', pathMatch: 'full'},
  {path: 'tareas', component: TareasListasComponent},
  {path: 'tareas/add', component: TareasFormComponent},
  {path: 'tareas/edit/:id', component: TareasFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
