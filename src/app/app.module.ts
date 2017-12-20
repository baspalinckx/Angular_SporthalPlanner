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
import {HttpModule} from "@angular/http";
import { SportshallComponent } from './sportshall/sportshall.component';
import { SportshallListComponent } from './sportshall/sportshall-list/sportshall-list.component';
import { SportshallItemComponent } from './sportshall/sportshall-list/sportshall-item/sportshall-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailComponent,
    ReservationEditComponent,
    ReservationListComponent,
    ReservationStartComponent,
    ReservationsComponent,
    ReservationItemComponent,
    SportshallComponent,
    SportshallListComponent,
    SportshallItemComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ ReservationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
