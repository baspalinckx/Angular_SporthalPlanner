import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Reservation} from "../../shared/reservations.model";
import {ReservationService} from "../reservation.service";
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-reservation-week-list',
  templateUrl: './reservation-week-list.component.html',
  styleUrls: ['./reservation-week-list.component.css'],
})
export class ReservationWeekListComponent implements OnInit {
  reservations: Reservation[];

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.reservationService.getReservations()
      .then(res => this.reservations = res);
  }

}
