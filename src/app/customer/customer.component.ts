import { Component, OnInit } from '@angular/core';
import {Reservation} from "../shared/reservations.model";
import {ReservationService} from "../reservations/reservation.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  reservations: Reservation[];
  customer: Reservation;
  email: string;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  onSearchEmail(){

  }

}
