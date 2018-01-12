import {Reservation} from "./reservations.model";

export class ReservationweekModel {
  private _mondayArray: Array<Reservation>;
  private _tuesdayArray: Array<Reservation>;
  private _wednesdayArray: Array<Reservation>;
  private _thursdayArray: Array<Reservation>;
  private _fridayArray: Array<Reservation>;
  private _saterdayArray: Array<Reservation>;
  private _sundayArray: Array<Reservation>;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  get mondayArray(): Array<Reservation> {
    return this._mondayArray;
  }

  set mondayArray(value: Array<Reservation>) {
    this._mondayArray = value;
  }
  get tuesdayArray(): Array<Reservation> {
    return this._tuesdayArray;
  }

  set tuesdayArray(value: Array<Reservation>) {
    this._tuesdayArray = value;
  }
  get wednesdayArray(): Array<Reservation> {
    return this._wednesdayArray;
  }

  set wednesdayArray(value: Array<Reservation>) {
    this._wednesdayArray = value;
  }
  get thursdayArray(): Array<Reservation> {
    return this._thursdayArray;
  }

  set thursdayArray(value: Array<Reservation>) {
    this._thursdayArray = value;
  }
  get fridayArray(): Array<Reservation> {
    return this._fridayArray;
  }

  set fridayArray(value: Array<Reservation>) {
    this._fridayArray = value;
  }
  get saterdayArray(): Array<Reservation> {
    return this._saterdayArray;
  }

  set saterdayArray(value: Array<Reservation>) {
    this._saterdayArray = value;
  }
  get sundayArray(): Array<Reservation> {
    return this._sundayArray;
  }

  set sundayArray(value: Array<Reservation>) {
    this._sundayArray = value;
  }
}
