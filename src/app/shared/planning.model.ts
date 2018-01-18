import {Staff} from "./staff.model";

export class Planning {
  private _sportHallId: Number;
  private _date: Date;
  private _startTime: Date;
  private _endTime: Date;
  private _staff: Staff;
  private _job: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get sportHallId(): Number {
    return this._sportHallId;
  }

  public set sportHallId(value: Number) {
    this._sportHallId = value;
  }

  public set date(value: Date) {
    this._date = value;
  }
  public get date(): Date {
    return this._date;
  }

  public set startTime(value: Date) {
    this._startTime = value;
  }
  public get startTime(): Date {
    return this._startTime;
  }

  public set endTime(value: Date) {
    this._endTime = value;
  }
  public get endTime(): Date {
    return this._endTime;
  }

  public get staff(): Staff {
    return this._staff;
  }

  public set staff(value: Staff) {
    this._staff = value;
  }

  public get job(): string {
    return this._job;
  }

  public set job(value: string) {
    this._job = value;
  }

}
