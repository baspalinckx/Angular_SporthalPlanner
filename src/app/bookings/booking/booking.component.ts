import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReservationService} from '../../reservations/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
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

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute ) { }

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
  }
}
