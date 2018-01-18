import {Component, OnChanges, OnInit} from '@angular/core';
import {ReservationService} from "../../reservations/reservation.service";
import {SportshallService} from "../../sportshall/sportshall.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SportsHall} from "../../shared/sportshall.model";
import {StaffService} from "../staff.service";
import {Staff} from "../../shared/staff.model";
import {connectableObservableDescriptor} from "rxjs/observable/ConnectableObservable";
import {Planning} from "../../shared/planning.model";
import {pl} from "ngx-bootstrap";

@Component({
  selector: 'app-new-planning',
  templateUrl: './new-planning.component.html',
  styleUrls: ['./new-planning.component.css']
})
export class NewPlanningComponent implements OnInit {
  private sportsHall: SportsHall = null;
  private staffArray: Staff[] = null;
  private startTimeArray = [];
  private endTimeArray = [];
  private date: Date = null;
  private startTime: number = null;
  private endTime: number = null;
  private selectedStaff: Staff = null;
  private job: string = null;
  private openTime: number = null;
  private closeTime: number = null;



  constructor(private reservationService: ReservationService,
              private sportshallService: SportshallService,
              private staffService: StaffService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.sportshallService.getSportshallById(params['id'])
        .then(sportshall => {
          this.sportsHall = sportshall;
          this.openTime = new Date(sportshall.openTime).getHours();
          this.closeTime = new Date(sportshall.closeTime).getHours();
          for (let startTime = this.openTime; startTime < this.closeTime; startTime++) {
            this.startTimeArray.push(startTime);
          }
        });
    });

    this.staffService.getallStaff()
      .then(res => {
        this.staffArray = res;
      })
      .catch(err => {});
  }

  startTimeChange() {
    this.endTimeArray = [];
      for (let startTime = this.startTime + 1; startTime <= this.closeTime; startTime++) {
        this.endTimeArray.push(startTime);
      }
  }

  Submit(){
    let planning = new Planning();
    planning.startTime = new Date(2000, 1, 1, this.startTime, 0, 0);
    planning.endTime = new Date(2000, 1, 1, this.endTime, 0, 0);
    planning.staff = this.selectedStaff;
    planning.job = this.job;
    planning.sportHallId = this.sportsHall.sportsHallID;
    planning.date = this.date;
    this.staffService.savePlanning(planning).then();
    this.reset();
  }

  reset() {
    this.endTimeArray = [];
    this.date = null;
    this.startTime = null;
    this.endTime = null;
    this. selectedStaff = null;
    this.job = null;
  }
}
