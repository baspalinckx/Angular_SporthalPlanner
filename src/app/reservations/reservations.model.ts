import {SportsHall} from '../shared/sportshall.model';

export class Reservation {


  private _ReserveID: Number;
  private _StartTime: string;
  private _EndTime: string;
  private _FirstName: string;
  private _LastName: string;
  private _Email: string;
  private _PhoneNumber: Number;
  private _SportsHall: SportsHall;
  private _Context: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get Context(): string {
    return this._Context;
  }

  public set Context(value: string) {
    this._Context = value;
  }

  public get SportsHall(): SportsHall {
    return this._SportsHall;
  }

  public set SportsHall(value: SportsHall) {
    this._SportsHall = value;
  }
  public get PhoneNumber(): Number {
    return this._PhoneNumber;
  }

  public set PhoneNumber(value: Number) {
    this._PhoneNumber = value;
  }
  public get Email(): string {
    return this._Email;
  }

  public set Email(value: string) {
    this._Email = value;
  }
  public get LastName(): string {
    return this._LastName;
  }

  public set LastName(value: string) {
    this._LastName = value;
  }
  public get FirstName(): string {
    return this._FirstName;
  }

  public set FirstName(value: string) {
    this._FirstName = value;
  }
  public get EndTime(): string {
    return this._EndTime;
  }

  public set EndTime(value: string) {
    this._EndTime = value;
  }
  public get StartTime(): string {
    return this._StartTime;
  }

  public set StartTime(value: string) {
    this._StartTime = value;
  }
  public get ReserveID(): Number {
    return this._ReserveID;
  }

  public set ReserveID(value: Number) {
    this._ReserveID = value;
  }
}
