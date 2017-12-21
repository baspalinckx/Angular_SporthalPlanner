import {Component, OnInit, Input} from '@angular/core';
import {SportsHall} from "../../../shared/sportshall.model";

@Component({
  selector: 'app-sportshall-item',
  templateUrl: './sportshall-item.component.html',
  styleUrls: ['./sportshall-item.component.css']
})
export class SportshallItemComponent implements OnInit {
  @Input() sportshall: SportsHall;
  constructor() { }

  ngOnInit() {
  }

}
