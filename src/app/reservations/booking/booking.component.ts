import {Component, ViewChild, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReservationService} from '../reservation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SportsHall} from '../../shared/sportshall.model';
import {SportshallService} from '../../sportshall/sportshall.service';
import {Reservation} from "../../shared/reservations.model";
import {Sport} from "../../shared/sport.model";
import {SportshallssportModel} from "../../shared/sportshallssport.model";
import {forEach} from "@angular/router/src/utils/collection";
import {isUndefined} from "util";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {

  @ViewChild('f') bookingForm: NgForm;


  lastdatum: Date;
  sportsHall: SportsHall;
  sportshallssports: [SportshallssportModel];
  subscription: Subscription;
  dropDownTimes: number[];
  dropDownEndTimes: number[];
  selectedStartTime: number;
  selectedEndTime: number;
  sport: Sport;
  startTime: number;
  emailBool = false;
  emailAdress: '';
  customer: Reservation;
  clicked = false;

  constructor(private reservationService: ReservationService,
              private sportshallService: SportshallService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.route.parent.params.subscribe(params => {
      this.sportshallService.getSportshallById(params['id'])
        .then(sportshall => {
            this.sportsHall = sportshall;
            this.sportshallssports = sportshall.sportsHallSports;
        });
    });
    this.bookingForm.valueChanges.subscribe((update) => {
      if (update.bookingData) {
        if (update.bookingData.Datum) {
          let year = parseInt(update.bookingData.Datum.toString().slice(0, 4), 10);
          if (year > 2000 && year < 2050 && (this.lastdatum !== update.bookingData.Datum || this.startTime !== this.bookingForm.value.bookingData.StartTime)) {
            this.reservationService.getReservationsS(this.sportsHall.sportsHallID.toString(), update.bookingData.Datum)
              .then(reserves => {
                this.lastdatum = update.bookingData.Datum;
                this.startTime = this.bookingForm.value.bookingData.StartTime;
                let openingsTime: number = +this.sportsHall.openTime.toString().slice(11, 13);
                let closingTime: number = +this.sportsHall.closeTime.toString().slice(11, 13);
                let timesArray = [];
                for (let i = 0; i < 24; i++) {
                  timesArray.push({time: i, free: false});
                }

                for (openingsTime; openingsTime < closingTime; openingsTime++) {
                  timesArray[openingsTime].free = true;
                }

                reserves.forEach(reserve => {
                  let startTime: number = reserve.startTime.toString().slice(11, 13);
                  let endTime: number = reserve.endTime.toString().slice(11, 13);
                  if (startTime < 10) {
                    startTime = parseInt (startTime.toString().slice(1, 2));
                  }
                  if (endTime < 10) {
                    endTime = parseInt (endTime.toString().slice(1, 2));
                  }
                  startTime++;
                  endTime++;
                  for (startTime; startTime < endTime; startTime++) {
                    timesArray[startTime].free = false;
                  }
                });

                this.dropDownTimes = [];
                this.dropDownEndTimes = [];
                let afterStartTime = true;

                timesArray.forEach(time => {
                  if (time.free === true) {
                    this.dropDownTimes.push(time.time);
                  }

                  if (this.selectedStartTime) {
                    if (time.time > this.selectedStartTime && time.time <= closingTime && afterStartTime) {
                      if (time.free === true) {
                        this.dropDownEndTimes.push(time.time);
                      } else {
                        this.dropDownEndTimes.push(time.time);
                        afterStartTime = false;
                      }
                    }
                  }
                });
              });
          }
        }
      }
    });
  }

  onSearch() {
    this.clicked = true;
    this.emailAdress = this.emailAdress || '' ;
    if (this.emailAdress !== '') {
      this.reservationService.getCustomer(this.emailAdress)
        .then(res => {
          if (res === 'fout') {
            this.emailBool = true;
          }
          else {
            this.emailBool = false;
            this.customer = res;
          }
        });
    }
  }

  onSubmit() {
    let reservation = new Reservation();
    reservation.datum = this.bookingForm.value.bookingData.Datum;
    reservation.firstName = this.bookingForm.value.bookingData.FirstName || this.customer.firstName;
    reservation.lastName = this.bookingForm.value.bookingData.LastName || this.customer.lastName;
    reservation.email = this.bookingForm.value.bookingData.Email;
    reservation.phoneNumber = this.bookingForm.value.bookingData.PhoneNumber || this.customer.phoneNumber;
    reservation.context = 'Reservation';
    reservation.startTime = new Date(2000, 1, 1, this.bookingForm.value.bookingData.StartTime, 0, 0, 0).toString();
    reservation.endTime = new Date(2000, 1, 1, this.bookingForm.value.bookingData.EndTime, 0, 0, 0).toString();
    reservation.postalCode = this.bookingForm.value.bookingData.PostalCode;
    reservation.streetName = this.bookingForm.value.bookingData.StreetName;
    reservation.houseNumber = this.bookingForm.value.bookingData.HouseNumber;
    reservation.sportsHall = this.sportsHall;
    reservation.sport = this.sport;

    this.reservationService.addReservation(reservation);
    this.bookingForm.reset();
    this.dropDownEndTimes = [];
    this.dropDownTimes = [];

    if (this.emailBool === true) {
      this.reservationService.addCustomer(reservation);
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
