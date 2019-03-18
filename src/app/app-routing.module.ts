import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { PerfilComponent } from './body/perfil/perfil.component';
import { DataBaseComponent } from './body/data-base/data-base.component';
import { ReservationsComponent } from "./body/reservations/reservations.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'user/profile', component: PerfilComponent },
  {path: 'user/DataBase', component: DataBaseComponent },
  {path: 'user/reservations', component: ReservationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
