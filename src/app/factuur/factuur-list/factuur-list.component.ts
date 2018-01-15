import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../reservations/reservation.service';
import {SportshallService} from '../../sportshall/sportshall.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SportsHall} from '../../shared/sportshall.model';

@Component({
  selector: 'app-factuur-list',
  templateUrl: './factuur-list.component.html',
  styleUrls: ['./factuur-list.component.css']
})
export class FactuurListComponent implements OnInit {
  sporthall: SportsHall;
  id: string;

  constructor(private reservationService: ReservationService,
              private sporthalService: SportshallService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
      this.id = params['id'];
      this.sporthalService.getSportshallById(this.id).then(res => {
        this.sporthall = res;
        console.log(this.sporthall.reserve);
      });
      // this.reservationService.getReservationById(this.id);
      // }
    });*/

  }


}
