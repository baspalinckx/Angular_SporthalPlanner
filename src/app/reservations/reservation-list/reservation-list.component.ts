import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../shared/reservations.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ReservationService} from '../reservation.service';
import {SportshallService} from "../../sportshall/sportshall.service";
import {DatepickerOptions} from 'ng2-datepicker';
import {ReservationweekModel} from "../../shared/reservationweek.model";
import {SportsHall} from "../../shared/sportshall.model";
import {SportsBuilding} from "../../shared/sportsbuilding.model";


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
  sporthall: SportsHall = new SportsHall;

  date: Date;
  sunday: Date;
  mondaydate: string;
  sundaydate: string;
  week: Array<Date>;
  id: string;

  constructor(private reservationService: ReservationService,
              private sporthalService: SportshallService,
              private router: Router,
              private route: ActivatedRoute) {
    this.sporthall.sportsHallID = 0;
    console.log(this.sporthall);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.sporthalService.getSportshallById(this.id).then(res => {
        this.sporthall = res;
      });
      this.date = new Date();
    });
  }

  onSearchWeek() {

    this.date.setDate(this.date.getDate() + 1 - (this.date.getDay() || 7));
    this.sunday = new Date(this.date.getTime());
    this.sunday.setDate(this.sunday.getDate() + 6);


    this.mondaydate = this.date.getFullYear() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getDate();
    this.sundaydate = this.sunday.getFullYear() + '/' + (this.sunday.getMonth() + 1) + '/' + this.sunday.getDate();


    this.router.navigate(['week/' + this.id], {
      queryParams: {
        id: this.id,
        monday: this.mondaydate,
        sunday: this.sundaydate
      }
    });
  }

  onSearchDay() {
    this.reservationService.getReservationsS(this.id, this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear())
      .then(res => {
        this.reservations = res;
        this.reservations.sort(function (a, b) {
          return new Date(a.startTime).getHours() - new Date(b.startTime).getHours();
        });
      });


  }
