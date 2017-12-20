import {Component, OnDestroy, OnInit} from '@angular/core';
import {Reservation} from "../../shared/reservations.model";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ReservationService} from "../reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit, OnDestroy {

  reservations: Reservation[];
  subscription: Subscription;
  
  id : string;

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.reservationService.getReservations();

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.reservationService.getReservationsS(this.id, '2017-10-06')
            .then(res => this.reservations = res);
        }
      )
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

    /*this.reservations = this.reservationService.getReservations();*/
    this.reservationService.getReservations()
      .then(res => this.reservations = res).then(() => console.log(this.reservations));
  }

  onNewReservation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
