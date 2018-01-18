import {Component, ViewChild, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {StaffService} from "../staff.service";
import {Staff} from "../../shared/staff.model";

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

  @ViewChild('g') staffForm: NgForm;

  staff = {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    mondayAvailabilty: {
      StartTime: '',
      EndTime: ''
    },
    tuesdayAvailabilty: {
      StartTime: '',
      EndTime: ''
    },
    wednesdayAvailabilty: {
      StartTime: '',
      EndTime: ''
    },
    thursdayAvailabilty: {
      StartTime: '',
      EndTime: ''
    },
    fridayAvailabilty: {
      StartTime: '' ,
      EndTime: ''
    },
    saturdayAvailabilty: {
      StartTime: '',
      EndTime: ''
    },
    sundayAvailabilty: {
      StartTime: '',
      EndTime: ''
    },
  }

  submitted = false;
  dropDownTimes: number[];
  dropDownEndTimes: number[];
  selectedStartTime: number;
  selectedEndTime: number;

  constructor(private staffService: StaffService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    let staff = new Staff();
    staff.firstName = this.staffForm.value.staffData.FirstName;
    staff.lastName = this.staffForm.value.staffData.LastName;
    staff.email = this.staffForm.value.staffData.Email;
    staff.phoneNumber = this.staffForm.value.staffData.PhoneNumber;
    staff.startTime = new Date(2000, 1, 1, this.staffForm.value.staffData.StartTime, 0, 0, 0).toString();
    staff.endTime = new Date(2000, 1, 1, this.staffForm.value.staffData.EndTime, 0, 0, 0).toString();

    this.staffService.addStaff(staff);
    this.staffForm.reset();


  }

}
