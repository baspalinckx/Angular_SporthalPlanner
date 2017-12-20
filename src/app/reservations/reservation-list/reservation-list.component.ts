import {Component, OnDestroy, OnInit} from '@angular/core';
import {Reservation} from '../reservations.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../reservation.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[];
  subscription: Subscription;

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subscription = this.reservationService.reservationChanged
    //   .subscribe(
    //     (reservation: Reservation[]) => {
    //       this.reservationService.getReservations()
    //         .then(res => {
    //           this.reservations = res;
    //         });
    //     }
    //   );
    // this.reservationService.getReservations().then(res => {
    //   this.reservations = res;
    //   console.log(this.reservations);
    // });

    this.reservations = this.reservationService.getReservations();
  }


 // ngOnDestroy() {
  //  this.subscription.unsubscribe();
  //}

  onNewReservation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
