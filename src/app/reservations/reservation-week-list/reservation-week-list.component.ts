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
  reservationsWeek: ReservationweekModel[];
  mondaydate: string;
  sundaydate: string;
  id: string;
  randompar: string;

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

            this.reservationsWeek.forEach(day => {

              if (day.mondayArray != null) {

                day.mondayArray.sort(function (a, b) {
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }

              if (day.tuesdayArray != null) {

                day.tuesdayArray.sort(function (a, b) {
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }

              if (day.wednesdayArray != null) {

                day.wednesdayArray.sort(function (a, b) {
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }

              if (day.thursdayArray != null) {

                day.thursdayArray.sort(function (a, b) {
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }

              if (day.fridayArray != null) {
                day.fridayArray.sort(function (a, b) {
                  console.log(new Date(a.startTime).getHours());
                  console.log(new Date(b.startTime).getHours());
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }

              if (day.saterdayArray != null) {
                day.saterdayArray.sort(function (a, b) {
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }

              if (day.sundayArray != null) {
                day.sundayArray.sort(function (a, b) {
                  return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();

                });
              }
            });
          });
      });
  }
}
