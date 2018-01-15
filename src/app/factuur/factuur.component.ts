import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../reservations/reservation.service';
import {SportsHall} from '../shared/sportshall.model';

@Component({
  selector: 'app-factuur',
  templateUrl: './factuur.component.html',
  styleUrls: ['./factuur.component.css']
})
export class FactuurComponent implements OnInit {
sporthal: SportsHall;
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {

  }

}
