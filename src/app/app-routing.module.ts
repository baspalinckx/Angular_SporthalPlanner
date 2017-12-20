import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationsComponent} from "./reservations/reservations.component";
import {SportshallComponent} from "./sportshall/sportshall.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/sportshalls', pathMatch: 'full'},
  {
    path: 'home', component: ReservationsComponent, children: [
    {path: '', component: ReservationsComponent},

  ]},
  {path: 'sportshalls', component: SportshallComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
