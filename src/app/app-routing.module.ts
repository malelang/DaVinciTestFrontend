import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PerfilComponent } from './features/perfil/perfil.component';
import { CrearComponent } from './features/crear/crear.component';
import { InfoComponent } from './features/info/info.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: PerfilComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'info', component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
