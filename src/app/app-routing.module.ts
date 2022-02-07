import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeletePostComponent } from './delete/delete-post/delete-post.component';
import { DeleteTemaComponent } from './delete/delete-tema/delete-tema.component';
import { EditPostComponent } from './edit/edit-post/edit-post.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { EditUserComponent } from './edit/edit-user/edit-user.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},
  
  {path:'inicio', component: InicioComponent},
  {path:'tema', component: TemaComponent},

  {path: 'edit-tema/:id', component: EditTemaComponent},
  {path: 'delete-tema/:id', component: DeleteTemaComponent},
  {path: 'edit-post/:id', component: EditPostComponent},
  {path: 'delete-post/:id', component: DeletePostComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
