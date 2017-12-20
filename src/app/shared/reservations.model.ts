import {SportsHall} from './sportshall.model';

export class Reservation {
  private _reserveID: Number;
  private _startTime: string;
  private _endTime: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: Number;
  private _sportsHall: SportsHall;
  private _context: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get reserveID(): Number {
    return this._reserveID;
  }

  public set reserveID(value: Number) {
    this._reserveID = value;
  }
  public get startTime(): string {
    return this._startTime;
  }

  public set startTime(value: string) {
    this._startTime = value;
  }
  public get endTime(): string {
    return this._endTime;
  }

  public set endTime(value: string) {
    this._endTime = value;
  }
  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }
  public get phoneNumber(): Number {
    return this._phoneNumber;
  }

  public set phoneNumber(value: Number) {
    this._phoneNumber = value;
  }
  public get sportsHall(): SportsHall {
    return this._sportsHall;
  }

  public set sportsHall(value: SportsHall) {
    this._sportsHall = value;
  }
  public get context(): string {
    return this._context;
  }

  public set context(value: string) {
    this._context = value;
  }


}
