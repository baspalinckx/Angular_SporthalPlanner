import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../shared/reservations.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ReservationService} from '../reservation.service';
import {SportshallService} from "../../sportshall/sportshall.service";
import { DatepickerOptions } from 'ng2-datepicker';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  options: DatepickerOptions = {
    minYear: 2016,
    maxYear: 2030,
    displayFormat: 'DD[-]MM[-]YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    // locale: loc
  };

  reservations: Reservation[];
  subscription: Subscription;

  date: Date;
  id: string;

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.date = new Date();
    });
  }

  onSearchDate() {

    this.reservationService.getReservationsS(this.id, this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear())
      .then(res => {
        this.reservations = res;
        console.log(this.reservations);
        console.log(parseInt(this.reservations[0].startTime));
        this.reservations.sort(function (a, b){
          let bstart = parseInt (b.startTime.toString().slice(11, 13));
          let astart = parseInt (a.startTime.toString().slice(11, 13));
          if (astart < 10) {
            astart = parseInt (astart.toString().slice(1, 2));
          }
          if (bstart < 10) {
            bstart = parseInt (bstart.toString().slice(1, 2));
          }

          console.log(astart);
          console.log(bstart);

        return bstart - astart;
        });
      });


  }

}
