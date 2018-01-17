import {Component, OnInit, Input} from '@angular/core';
import {Customer} from "../../shared/customer.model";

@Component({
  selector: 'app-factuur-detail',
  templateUrl: './factuur-detail.component.html',
  styleUrls: ['./factuur-detail.component.css']
})
export class FactuurDetailComponent implements OnInit {

@Input() customer: Customer;

  constructor() { }

  ngOnInit() {
    console.log('test');
    console.log(this.customer);
  }

}
