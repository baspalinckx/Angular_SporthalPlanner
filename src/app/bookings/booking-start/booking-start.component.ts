import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-booking-start',
  templateUrl: './booking-start.component.html',
  styleUrls: ['./booking-start.component.css']
})
export class BookingStartComponent implements OnInit {
  id : string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onButtonClick() {
    console.log(this.id);
    // this.router.navigate(['reserve/' + this.id]);
    this.router.navigate([this.id], {relativeTo: this.route});
  }

}
