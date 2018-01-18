import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ReservationsComponent} from './reservations/reservations.component';
import {SportshallComponent} from './sportshall/sportshall.component';
import {ReservationStartComponent} from './reservations/reservation-start/reservation-start.component';
import {ReservationListComponent} from './reservations/reservation-list/reservation-list.component';
import {SportshallListComponent} from './sportshall/sportshall-list/sportshall-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ClosingAddComponent} from './reservations/closingday/closingday.component';
import {BookingComponent} from './reservations/booking/booking.component';
import {ReservationWeekListComponent} from "./reservations/reservation-week-list/reservation-week-list.component";
import {CustomerComponent} from "./customer/customer.component";
import {StaffComponent} from "./staff/staff.component";
import {StaffEditComponent} from "./staff/staff-edit/staff-edit.component";
import {StaffScheduleComponent} from "./staff/staff-schedule/staff-schedule.component";
import {FactuurComponent} from './factuur/factuur.component';
import {FactuurListComponent} from './factuur/factuur-list/factuur-list.component';
import {FactuurDetailComponent} from './factuur/factuur-detail/factuur-detail.component';
import {NewPlanningComponent} from "./staff/new-planning/new-planning.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/sportshalls', pathMatch: 'full'},
  {path: 'sportshalls', component: SportshallComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'staff', component: StaffComponent, children: [
    {path: 'new', component: StaffEditComponent},
    {path: 'schedule', component: StaffScheduleComponent}
  ]},
  {path: 'week', component: ReservationWeekListComponent, children: [
    {path: ':id ', component: ReservationWeekListComponent}
    ]},
  {path: 'factuur', component: FactuurComponent, children : [
      {path: '', component: ReservationStartComponent},
      {path: ':id', component: FactuurListComponent, children: [
          {path: 'detailed', component: FactuurDetailComponent}
        ]}
    ] },
  {path: 'reserve', component: ReservationsComponent, children: [
    {path: '', component: ReservationStartComponent},
      {path: ':id', component: ReservationListComponent, children: [
        {path: 'planing', component: NewPlanningComponent},
        {path: 'new', component: BookingComponent},
        {path: 'extra', component: ClosingAddComponent},
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
