import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../reservation.service";
import {Reservation} from "../../shared/reservations.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reservation-day',
  templateUrl: './reservation-day.component.html',
  styleUrls: ['./reservation-day.component.css']
})
export class ReservationDayComponent implements OnInit {

  id: string;
  dateS: string;
  date: Date;
  reservations: Reservation[];

  constructor(private reservationService: ReservationService,
              private route: ActivatedRoute) {
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.dateS = params['date'];
      console.log(this.dateS);
      this.date = new Date(this.dateS);
      console.log(this.date);

  });
  }

  ngOnInit() {

    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   console.log(this.id);
    //   this.dateS = params['date'];
    //   console.log(this.dateS);
    //   this.date = new Date(this.dateS);
    //   console.log(this.date);
      // this.reservationService.getReservationsS(this.id, this.dateS)
      //   .then(res => {
      //     this.reservations = res;
      //     this.reservations.sort(function (a, b) {
      //       return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();
      //     });
      //   });
    });
  }

}
