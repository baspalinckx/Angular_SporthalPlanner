import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservations/reservation-list/reservation-list.component';
import { ReservationStartComponent } from './reservations/reservation-start/reservation-start.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationItemComponent } from './reservations/reservation-list/reservation-item/reservation-item.component';
import { ReservationService} from './reservations/reservation.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { SportshallComponent } from './sportshall/sportshall.component';
import { SportshallListComponent } from './sportshall/sportshall-list/sportshall-list.component';
import { SportshallItemComponent } from './sportshall/sportshall-list/sportshall-item/sportshall-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './reservations/booking/booking.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClosingAddComponent} from './reservations/closingday/closingday.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgDatepickerModule } from 'ng2-datepicker';
import {SportshallService} from './sportshall/sportshall.service';
import { ReservationWeekListComponent } from './reservations/reservation-week-list/reservation-week-list.component';
import { ReservationWeekItemComponent } from './reservations/reservation-week-list/reservation-week-item/reservation-week-item.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    ReservationStartComponent,
    ReservationsComponent,
    ReservationItemComponent,
    SportshallComponent,
    SportshallListComponent,
    SportshallItemComponent,
    PageNotFoundComponent,
    HeaderComponent,
    BookingComponent,
    ClosingAddComponent,
    ReservationWeekListComponent,
    ReservationWeekItemComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgDatepickerModule

  ],
  providers: [ ReservationService, SportshallService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
