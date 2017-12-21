import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReservationService} from '../reservations/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  @ViewChild('f') bookingForm: NgForm;
  booking = {

    date: '',
    startTime: '',
    endTime: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '' };
  submitted = false;

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute ) { }

  onSubmit() {
    this.submitted = true;
    this.booking.date = this.bookingForm.value.bookingData.date;
    this.booking.startTime = this.bookingForm.value.bookingData.startTime;
    this.booking.endTime = this.bookingForm.value.bookingData.endTime;
    this.booking.firstName = this.bookingForm.value.bookingData.firstName;
    this.booking.lastName = this.bookingForm.value.bookingData.lastName;
    this.booking.email = this.bookingForm.value.bookingData.email;
    this.booking.phoneNumber = this.bookingForm.value.bookingData.phoneNumber;
    console.log(this.bookingForm.value);
    // this.reservationService.addReservation()
    this.bookingForm.reset();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
