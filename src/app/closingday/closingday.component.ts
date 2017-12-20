import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Reservation } from '../reservations/reservations.model'
import { ReservationService } from '../reservations/reservation.service';


@Component({
  selector: 'app-closing-add',
  templateUrl: './closingday.component.html',
  styleUrls: ['./closingday.component.css']
})
export class ClosingAddComponent implements OnInit {

  id: string;
  idChar: string;
  editMode = false;
  options: [string];
  closingForm: FormGroup;
  selectedOption: string;
  reserve: Reservation;

  constructor(private route: ActivatedRoute,
              private reservationService: ReservationService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.options = ['Sluitingsdag', 'Onderhoud']
      this.initForm();
    });
  }


  onSubmit() {
    if (this.editMode) {
      this.reservationService.updateClosing(this.id, this.closingForm.value);
    } else {
      this.reservationService.addClosing(this.closingForm.value);
    }
    this.onCancel();
  }

  changeSelectedTypeOption(event: any) {
    console.log(event);
    console.log(this.selectedOption);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let editreserve = new Reservation({reserveID: '', startTime: '', endTime: ''});

    if (this.editMode) {
      this.reservationService.getReservation(this.id).then((res) => console.log(res))
      this.reservationService.getReservation(this.id)
        .then(reserve => {
          editreserve = reserve;


          this.reserveForm = new FormGroup({
            'reserveID': new FormControl(editreserve.reserveID, Validators.required),
            'startTime': new FormControl(editreserve.startTime, Validators.required),
            'endTime': new FormControl(editreserve.endTime, Validators.required),
          });
        })
        .catch(error => console.log(error));
    }

    this.reserveForm = new FormGroup({
      'reserveID': new FormControl ('', Validators.required),
      'startTime': new FormControl('', Validators.required),
      'endTime': new FormControl('', Validators.required),
    });
  }

}
