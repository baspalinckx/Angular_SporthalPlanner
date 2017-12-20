import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationsComponent} from './reservations/reservations.component';
import {BookingComponent} from './booking/booking.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: ReservationsComponent, children: [
    {path: '', component: ReservationsComponent},
  ]},
  {path: 'nieuw', component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
