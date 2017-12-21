import {Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReservationService} from '../reservations/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {SportsHall} from '../shared/sportshall.model';
import {SportshallService} from '../sportshall/sportshall.service';

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
    PhoneNumber: '' };

  submitted = false;
  lastdatum: Date;
  sportsHall: SportsHall;
  subscription: Subscription;
  dropDownTimes: number[];
  dropDownEndTimes: number[];
  selectedStartTime: number;
  selectedEndTime: number;
  startTime: number;

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
                    if (time.time >= this.selectedStartTime && time.time < closingTime && afterStartTime) {
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


  onSubmit() {
    this.submitted = true;
    this.booking.Datum = this.bookingForm.value.bookingData.Datum;
    this.booking.StartTime = this.bookingForm.value.bookingData.StartTime;
    this.booking.EndTime = this.bookingForm.value.bookingData.EndTime;
    this.booking.FirstName = this.bookingForm.value.bookingData.FirstName;
    this.booking.LastName = this.bookingForm.value.bookingData.LastName;
    this.booking.Email = this.bookingForm.value.bookingData.Email;
    this.booking.PhoneNumber = this.bookingForm.value.bookingData.PhoneNumber;
    console.log(this.bookingForm.value);
    // this.reservationService.addReservation()
    this.bookingForm.reset();
    this.dropDownEndTimes = [];
    this.dropDownTimes = [];
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
