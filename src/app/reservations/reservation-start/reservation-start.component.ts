import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reservation-start',
  templateUrl: './reservation-start.component.html',
  styleUrls: ['./reservation-start.component.css']
})
export class ReservationStartComponent implements OnInit {
  id : string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onButtonClick() {
    console.log(this.id);
    this.router.navigate(['reserve/' + this.id]);
  }

}
