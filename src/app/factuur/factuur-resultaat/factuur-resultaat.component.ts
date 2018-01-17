import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../shared/customer.model';
import {ReservationService} from '../../reservations/reservation.service';
import {Reservation} from '../../shared/reservations.model';

@Component({
  selector: 'app-factuur-resultaat',
  templateUrl: './factuur-resultaat.component.html',
  styleUrls: ['./factuur-resultaat.component.css']
})
export class FactuurResultaatComponent implements OnInit {
  @Input() customerInvoice: Customer;
  customerAdress: Reservation;
  dateNow: Date = new Date();

  constructor(private customerService: ReservationService) {
  }

  ngOnInit() {
    this.customerService.getCustomer(this.customerInvoice.email)
      .then((customer) => {
        if (customer.toString() !== 'fout') {
          this.customerAdress = customer as Reservation;
          console.log(this.customerAdress);
        } else {
          console.log('fout');
        }

      });
  }

}
