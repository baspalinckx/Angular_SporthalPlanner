import {Component, ViewChild, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StaffService} from "../staff.service";
import {Staff} from "../../shared/staff.model";

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  private firstname: string = '';
  private lastname: string = '';
  private email: string = '';
  private phoneNumber: string =  '';
  private job: string = '';

  submitted = false;

  constructor(private staffService: StaffService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;

    let staff = new Staff();
    staff.firstName = this.firstname;
    staff.lastName = this.lastname;
    staff.email = this.email;
    staff.phoneNumber = this.phoneNumber;
    staff.job = this.job;

    this.staffService.addStaff(staff);

    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phoneNumber = '';
    this.job = '';
  }
}
