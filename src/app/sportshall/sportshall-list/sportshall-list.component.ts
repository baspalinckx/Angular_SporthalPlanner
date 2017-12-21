import { Component, OnInit } from '@angular/core';
import {SportsHall} from "../../shared/sportshall.model";
import {Router, ActivatedRoute} from "@angular/router";
import {ReservationService} from "../../reservations/reservation.service";

@Component({
  selector: 'app-sportshall-list',
  templateUrl: './sportshall-list.component.html',
  styleUrls: ['./sportshall-list.component.css']
})
export class SportshallListComponent implements OnInit {

  sportshalls: SportsHall[];


  constructor(private reservationService: ReservationService,
  private router: Router,
  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.reservationService.getSportshalls()
      .then(res => this.sportshalls = res)
  }

}
