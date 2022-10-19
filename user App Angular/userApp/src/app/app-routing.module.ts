import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Code404Component } from './components/code404/code404.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  //ruta principal
  { path: 'home', component: ListUsersComponent },
  //vista usuario
  { path: 'user/:idUser', component: ViewUserComponent },
  //vista formulario actualizar usuario
  { path: 'actualizar/:idUser', component: FormUserComponent },
  //vista formulario crear usuario
  { path: 'registro', component: FormUserComponent },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
