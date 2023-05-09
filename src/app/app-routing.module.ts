import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'votar', component: GotyComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '***', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }