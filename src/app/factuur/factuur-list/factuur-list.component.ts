import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../reservations/reservation.service';
import {SportshallService} from '../../sportshall/sportshall.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SportsHall} from '../../shared/sportshall.model';
import {Customer} from '../../shared/customer.model';
import {forEach} from '@angular/router/src/utils/collection';
import {Reservation} from '../../shared/reservations.model';

@Component({
  selector: 'app-factuur-list',
  templateUrl: './factuur-list.component.html',
  styleUrls: ['./factuur-list.component.css']
})
export class FactuurListComponent implements OnInit {
  sporthall: SportsHall;
  customers: [Customer];
  customerInvoice: Customer;
  reservations: [Reservation];
  id: string;
  index: number;
  isClicked: boolean;

  constructor(private reservationService: ReservationService,
              private sporthalService: SportshallService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  onNotify(index: number){
    this.index = index;
    this.customerInvoice = null;
  }
  onNotifyDetailed(){
    console.log('click')
    this.customerInvoice = this.customers[this.index];
  }

  onFactuurClicked(){

  }

  ngOnInit() {
    this.index = -1;

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.sporthalService.getSportshallById(this.id).then(res => {

        this.reservations = res.reserve;
      }).then(() => {
          const uniqueEmails = [];
          for (let i = 0; i < this.reservations.length; i++) {
            if (uniqueEmails.indexOf(this.reservations[i].email) === -1) {
              uniqueEmails.push(this.reservations[i].email);

            }
          }
          for (let i = 0; i < uniqueEmails.length; i++) {
            // alert(uniqueEmails[i]);
            // console.log(uniqueEmails[i]);
            const customer = new Customer(uniqueEmails[i].toString());
            if(this.customers === undefined) {
               this.customers = [customer];

            }else{
              this.customers.push(customer);

            }
          }

        }
      ).then(() => {
        // let list: [Reservation];

        for (let x = 0; x < this.customers.length; x++){
          for (let y = 0; y < this.reservations.length; y++){
            if(this.customers[x].email === this.reservations[y].email){

              if(this.customers[x].reserve === undefined){
                this.customers[x].reserve = [this.reservations[y]];
              }else {
                this.customers[x].reserve.push(this.reservations[y]);
              }

            }
          }

        }

      });
    });
  }


}
