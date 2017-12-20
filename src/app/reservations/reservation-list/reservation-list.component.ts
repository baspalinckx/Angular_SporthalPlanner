import {Component, OnDestroy, OnInit} from '@angular/core';
import {Reservation} from '../../shared/reservations.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ReservationService} from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[];
  subscription: Subscription;

  dateString: string;
  id: string;

  constructor(private reservationService: ReservationService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }


 // ngOnDestroy() {
  //  this.subscription.unsubscribe();
  //}

  onNewReservation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  onSearchDate() {
    // 2017-05-05
    this.reservationService.getReservationsS(this.id, this.dateString.slice(0, 4) + '-' + this.dateString.slice(5, 7) + '-' + this.dateString.slice(8, 10))
      .then(res => this.reservations = res);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
