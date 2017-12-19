import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReservationDetailComponent } from './reservations/reservation-detail/reservation-detail.component';
import { ReservationEditComponent } from './reservations/reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './reservations/reservation-list/reservation-list.component';
import { ReservationStartComponent } from './reservations/reservation-start/reservation-start.component';
import { ReservationsComponent } from './reservations/reservations.component';



@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailComponent,
    ReservationEditComponent,
    ReservationListComponent,
    ReservationStartComponent,
    ReservationsComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
