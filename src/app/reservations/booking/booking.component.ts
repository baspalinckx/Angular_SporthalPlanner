import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
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

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {

  @ViewChild('f') bookingForm: NgForm;
  booking = {
    Datum: '',
    StartTime: '',
    EndTime: '',
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    PostalCode: '',
  StreetName: '',
  HouseNumber: ''};

  submitted = false;
  lastdatum: Date;
  sportsHall: SportsHall;
  subscription: Subscription;
  dropDownTimes: number[];
  dropDownEndTimes: number[];
  selectedStartTime: number;
  selectedEndTime: number;
  startTime: number;
  sports: [SportshallssportModel];
  selectedSport: string;
  emailBool: boolean = false;
  emailAdress: '';
  customer: Reservation;

  constructor(private reservationService: ReservationService,
              private sportshallService: SportshallService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*changeSelectedType(event: any) {
    /!*console.log(event); //object, depends on ngValue
    console.log(this.selectedSport.name); //object, depends on ngValue*!/
  }*/

  ngOnInit() {
    this.subscription = this.route.parent.params.subscribe(params => {
      this.sportshallService.getSportshallById(params['id'])
        .then(sportshall => {
            this.sportsHall = sportshall;
            this.sports = this.sportsHall.sportsHallSports;
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
    this.reservationService.getCustomer(this.emailAdress)
      .then(res => {
        if (res === 'fout') {

          this.emailBool = true;
          console.log(this.emailBool);
        }
        else {
          this.emailBool = false;
          console.log(res);
          /*this.bookingForm.value.bookingData.firstName = res.firstName;
          this.bookingForm.value.bookingData.lastName = res.lastName;
          this.bookingForm.value.bookingData.phoneNumber = res.phoneNumber;
          console.log(this.bookingForm.value.bookingData.phoneNumber);*/
          console.log(this.emailBool);
          this.customer = res;

        }
      });
  }





  onSubmit() {
    this.submitted = true;
    this.booking.Datum = this.bookingForm.value.bookingData.Datum;
    this.booking.StartTime = this.bookingForm.value.bookingData.StartTime;
    this.booking.EndTime = this.bookingForm.value.bookingData.EndTime;
    this.booking.FirstName = this.bookingForm.value.bookingData.FirstName || this.customer.firstName;
    this.booking.LastName = this.bookingForm.value.bookingData.LastName || this.customer.lastName;
    this.booking.Email = this.bookingForm.value.bookingData.Email;
    this.booking.PhoneNumber = this.bookingForm.value.bookingData.PhoneNumber || this.customer.phoneNumber;;

    let reservation = new Reservation();
    reservation.datum = this.bookingForm.value.bookingData.Datum;
    reservation.firstName = this.bookingForm.value.bookingData.FirstName || this.customer.firstName;
    reservation.lastName = this.bookingForm.value.bookingData.LastName || this.customer.lastName;
    reservation.email = this.bookingForm.value.bookingData.Email;
    reservation.phoneNumber = this.bookingForm.value.bookingData.PhoneNumber || this.customer.phoneNumber;
    reservation.context = 'reservation';
    reservation.startTime = new Date(2000, 1, 1, this.bookingForm.value.bookingData.StartTime, 0, 0, 0).toString();
    reservation.endTime = new Date(2000, 1, 1, this.bookingForm.value.bookingData.EndTime, 0, 0, 0).toString();
    reservation.postalCode = this.bookingForm.value.bookingData.PostalCode;
    reservation.streetName = this.bookingForm.value.bookingData.StreetName;
    reservation.houseNumber = this.bookingForm.value.bookingData.HouseNumber;
    reservation.sportsHall = this.sportsHall;

    this.reservationService.addReservation(reservation);
    this.bookingForm.reset();
    this.dropDownEndTimes = [];
    this.dropDownTimes = [];

    if(this.emailBool === true){
      this.reservationService.addCustomer(reservation);
    }

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
