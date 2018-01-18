import { Component, OnInit } from '@angular/core';
import {Reservation} from "../shared/reservations.model";
import {ReservationService} from "../reservations/reservation.service";
import {StringDecoder} from 'string_decoder';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  reservations: Reservation[];
  customer: Reservation;
  email: string;
  id : number;
  customers: Reservation[];
  info: string;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getCustomers()
      .then(reservations => this.customers = reservations);
    this.info = 'Vul een gebruiker en sporthal id in';
  }

  onSearchEmail() {
    this.info = 'Gebruiker staat niet in onze database';
    this.reservationService.getCustomer(this.email)
      .then(res => {

        if (res.toString() === 'fout') {

          this.customer = null;
        } else {
          this.customer = res as Reservation;
          this.reservationService.getReservationsByEmail(this.id, this.email)
            .then(reservations => this.reservations = reservations);
        }

      });
  }

  onClickEmail(email: string){
    this.email = email;
  }

}
