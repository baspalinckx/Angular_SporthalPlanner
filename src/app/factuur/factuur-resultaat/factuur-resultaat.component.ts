import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../shared/customer.model';
import {ReservationService} from '../../reservations/reservation.service';
import {Reservation} from '../../shared/reservations.model';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-factuur-resultaat',
  templateUrl: './factuur-resultaat.component.html',
  styleUrls: ['./factuur-resultaat.component.css']
})
export class FactuurResultaatComponent implements OnInit {
  @Input() customerInvoice: Customer;
  @Input() price: number;
  customerAdress: Reservation;
  dateNow: Date = new Date();
  customerNumber: number;
  reservationNumber: number;
  @ViewChild('exportthis') element : ElementRef;
  constructor(private customerService: ReservationService) {
  }

  onClick() {

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


    this.customerNumber = Math.floor((Math.random() * 10000000) + 1000000);
    this.reservationNumber = Math.floor((Math.random() * 1000000000000) + 10000000000);
  }


}
