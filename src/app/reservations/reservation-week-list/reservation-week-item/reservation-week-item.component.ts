import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../shared/reservations.model";

@Component({
  selector: 'app-reservation-week-item',
  templateUrl: './reservation-week-item.component.html',
  styleUrls: ['./reservation-week-item.component.css']
})
export class ReservationWeekItemComponent implements OnInit {
  @Input() reservation: Reservation;
  @Input() index: string;

  constructor() { }

  ngOnInit() {
    this.reservation.startTime = new Date(this.reservation.startTime).getHours() + 1 + ":00";
    this.reservation.endTime = new Date(this.reservation.endTime).getHours() + 1 + ":00";

  }

}
