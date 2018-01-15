import {Component, Input, OnInit, Output} from '@angular/core';
import {Reservation} from '../../../shared/reservations.model';
import {Customer} from '../../../shared/customer.model';




@Component({
  selector: 'app-factuur-item',
  templateUrl: './factuur-item.component.html',
  styleUrls: ['./factuur-item.component.css']
})
export class FactuurItemComponent implements OnInit {
  @Input() customer: Customer;
  ngOnInit() {
  }

}
