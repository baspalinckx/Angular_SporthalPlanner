import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Customer} from "../../shared/customer.model";

@Component({
  selector: 'app-factuur-detail',
  templateUrl: './factuur-detail.component.html',
  styleUrls: ['./factuur-detail.component.css']
})
export class FactuurDetailComponent implements OnInit {
@Output() notify = new EventEmitter<any>();
@Input() customer: Customer;
@Input() price: number;

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.notify.emit();
  }

}
