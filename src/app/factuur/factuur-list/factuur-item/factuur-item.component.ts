import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Reservation} from '../../../shared/reservations.model';
import {Customer} from '../../../shared/customer.model';




@Component({
  selector: 'app-factuur-item',
  templateUrl: './factuur-item.component.html',
  styleUrls: ['./factuur-item.component.css']
})
export class FactuurItemComponent implements OnInit {
  @Input() customer: Customer;
  @Input() index: number;
  length: number;
  @Output() notify = new EventEmitter<Number>();
  ngOnInit() {
    if(this.customer.reserve){
      this.length = this.customer.reserve.length;
    }else {
      this.length = 0;
    }
  }

  onClick() {
    this.notify.emit(this.index)
  }

}
