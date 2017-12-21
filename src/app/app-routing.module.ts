import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReservationsComponent} from './reservations/reservations.component';
import {SportshallComponent} from './sportshall/sportshall.component';
import {ReservationStartComponent} from './reservations/reservation-start/reservation-start.component';
import {ReservationListComponent} from './reservations/reservation-list/reservation-list.component';
import {SportshallListComponent} from './sportshall/sportshall-list/sportshall-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ClosingAddComponent} from './closingday/closingday.component';
import {BookingComponent} from './booking/booking.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/sportshalls', pathMatch: 'full'},
  {path: 'sportshalls', component: SportshallComponent},
  {path: 'reserve', component: ReservationsComponent, children: [
    {path: '', component: ReservationStartComponent},
    {path: ':id', component: ReservationListComponent, children: [
      {path: 'new', component: BookingComponent},
      {path: 'extra', component: ClosingAddComponent}
    ]}
  ]},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
