import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DataBaseComponent } from './body/data-base/data-base.component';
import { PerfilComponent } from './body/perfil/perfil.component';
import { HomeComponent } from './body/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationsComponent } from './body/reservations/reservations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from './body/rooms/rooms.component';
import { WeComponent } from './body/we/we.component';
import { TheaterPlaysComponent } from './body/theater-plays/theater-plays.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DataBaseComponent,
    PerfilComponent,
    HomeComponent,
    ReservationsComponent,
    RoomsComponent,
    WeComponent,
    TheaterPlaysComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
