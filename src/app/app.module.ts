import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReservationDetailComponent } from './reservations/reservation-detail/reservation-detail.component';
import { ReservationEditComponent } from './reservations/reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './reservations/reservation-list/reservation-list.component';
import { ReservationStartComponent } from './reservations/reservation-start/reservation-start.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationItemComponent } from './reservations/reservation-list/reservation-item/reservation-item.component';
import { ReservationService} from "./reservations/reservation.service";
import {AppRoutingModule} from "./app-routing.module";
import {ClosingAddComponent} from "./closingday/closingday.component";


@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailComponent,
    ReservationEditComponent,
    ReservationListComponent,
    ReservationStartComponent,
    ReservationsComponent,
    ReservationItemComponent,
    ClosingAddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ReservationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
