import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Reservation} from "../../shared/reservations.model";
import {ReservationService} from "../reservation.service";
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ReservationweekModel} from "../../shared/reservationweek.model";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-reservation-week-list',
  templateUrl: './reservation-week-list.component.html',
  styleUrls: ['./reservation-week-list.component.css'],
})
export class ReservationWeekListComponent implements OnInit {
  reservationsWeek: ReservationweekModel = new ReservationweekModel([[], [], [], [], [], [], []]);
  mondaydate: string;
  mondayDate: Date;
  tuesdaydate: string;
  wednesdaydate: string;
  thursdaydate: string;
  fridaydate: string;
  saterdaydate: string;
  sundaydate: string;
  id: string;

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'];
        this.mondaydate = params['monday'];
        this.sundaydate = params['sunday'];

        this.reservationService.getReservationsWeek(this.id, this.mondaydate, this.sundaydate)
          .then(res => {
            this.reservationsWeek = res;
            console.log(this.reservationsWeek)

            this.reservationsWeek[0].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });
            this.reservationsWeek[1].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });

            this.reservationsWeek[2].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });

            this.reservationsWeek[3].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });

            this.reservationsWeek[4].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });

            this.reservationsWeek[5].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });

            this.reservationsWeek[6].sort(function (a, b) {
              return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

            });
          });
      });


    console.log(this.mondaydate);
    this.mondayDate = new Date(this.mondaydate);
    this.tuesdaydate = this.mondayDate.getFullYear() + '/' + (this.mondayDate.getMonth() + 1) + '/' + (this.mondayDate.getDate() + 1);
    this.wednesdaydate = this.mondayDate.getFullYear() + '/' + (this.mondayDate.getMonth() + 1) + '/' + (this.mondayDate.getDate() + 2);
    this.thursdaydate = this.mondayDate.getFullYear() + '/' + (this.mondayDate.getMonth() + 1) + '/' + (this.mondayDate.getDate() + 3);
    this.fridaydate = this.mondayDate.getFullYear() + '/' + (this.mondayDate.getMonth() + 1) + '/' + (this.mondayDate.getDate() + 4);
    this.saterdaydate = this.mondayDate.getFullYear() + '/' + (this.mondayDate.getMonth() + 1) + '/' + (this.mondayDate.getDate() + 5);


  }
}
