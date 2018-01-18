import { Component, OnInit } from '@angular/core';
import {StaffService} from "../staff.service";
import {Staff} from "../../shared/staff.model";
import {Planning} from "../../shared/planning.model";

@Component({
  selector: 'app-staff-schedule',
  templateUrl: './staff-schedule.component.html',
  styleUrls: ['./staff-schedule.component.css']
})
export class StaffScheduleComponent implements OnInit {
  private email: string;
  private staff: Staff = null;
  private planning: Planning[] = null;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
  }

  onSearchEmail() {
    this.staffService.searchStaff(this.email).then(res => {
      this.staff = res;
    });

    this.staffService.getPlanningByEmail(this.email).then(res => {
      this.planning = res;
      console.log(this.planning);
    });
  }

}
