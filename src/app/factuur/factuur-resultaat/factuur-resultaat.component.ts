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
  priceTotal = 0;
  priceExclBTW = 0;
  priceArray: [number] = [0];
  customerAdress: Reservation;
  dateNow: Date = new Date();
  customerNumber: number;
  reservationNumber: number;
  constructor(private customerService: ReservationService) {
  }

  onClick() {

  }

  ngOnInit() {
    console.log(this.price);
    this.customerService.getCustomer(this.customerInvoice.email)
      .then((customer) => {
        if (customer.toString() !== 'fout') {
          this.customerAdress = customer as Reservation;

        } else {
          console.log('fout');
        }
      });



    for (let i = 0; i < this.customerInvoice.reserve.length; i++) {
      const start = new Date(this.customerInvoice.reserve[i].startTime).getHours();
      const end = new Date(this.customerInvoice.reserve[i].endTime).getHours();
      const lengthTime = end - start;
      const price = this.price * lengthTime;

      if (i === 0) {
        this.priceArray[0] = price;
      }else {
        this.priceArray.push(price);
      }

      this.priceTotal = this.priceTotal + price;
      this.priceExclBTW = this.priceTotal - (this.priceTotal * 0.21) ;
      console.log(this.priceTotal);
    }
    console.log(this.priceArray);



    this.customerNumber = Math.floor((Math.random() * 10000000) + 1000000);
    this.reservationNumber = Math.floor((Math.random() * 1000000000000) + 10000000000);
  }


}
