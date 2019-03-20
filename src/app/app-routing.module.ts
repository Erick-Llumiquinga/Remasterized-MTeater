import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { PerfilComponent } from './body/perfil/perfil.component';
import { DataBaseComponent } from './body/data-base/data-base.component';
import { ReservationsComponent } from "./body/reservations/reservations.component";
import { RoomsComponent } from './body/rooms/rooms.component'; 
import { TheaterPlaysComponent } from "./body/theater-plays/theater-plays.component";
import { WeComponent } from "./body/we/we.component";
import { ContactUsComponent } from "./body/contact-us/contact-us.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'user/profile', component: PerfilComponent },
  {path: 'user/DataBase', component: DataBaseComponent },
  {path: 'user/reservations', component: ReservationsComponent },
  {path: 'rooms', component: RoomsComponent},
  {path: 'thPlays', component: TheaterPlaysComponent},
  {path: 'we', component: WeComponent},
  {path: 'contactUs', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
