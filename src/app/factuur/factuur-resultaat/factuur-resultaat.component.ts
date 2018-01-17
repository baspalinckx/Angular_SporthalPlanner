import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../shared/customer.model';

@Component({
  selector: 'app-factuur-resultaat',
  templateUrl: './factuur-resultaat.component.html',
  styleUrls: ['./factuur-resultaat.component.css']
})
export class FactuurResultaatComponent implements OnInit {
@Input() customerInvoice: Customer;
dateNow: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
