import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../shared/reservations.model";

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input() reservation: Reservation;
  @Input() index: string;

  constructor() { }

  ngOnInit() {
    console.log(this.reservation);
  }

}
