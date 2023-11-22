import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'index', component:IndexComponent },

  { path: 'usuario', component:UsuarioComponent },
  { path: 'crear-usuario', component:CrearUsuarioComponent },
  { path: 'editar-usuario/:id', component:CrearUsuarioComponent },
  { path: 'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
