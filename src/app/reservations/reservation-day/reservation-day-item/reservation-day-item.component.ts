import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../shared/reservations.model";

@Component({
  selector: 'app-reservation-day-item',
  templateUrl: './reservation-day-item.component.html',
  styleUrls: ['./reservation-day-item.component.css']
})
export class ReservationDayItemComponent implements OnInit {
  @Input() reservation: Reservation;
  @Input() index: string;

  constructor() { }

  ngOnInit() {
  }

}
