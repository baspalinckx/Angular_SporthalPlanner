import {SportsHall} from './sportshall.model';

export class Reservation {
  private _reserveID: Number;
  private _startTime: string;
  private _endTime: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _sportsHall: SportsHall;
  private _context: string;
  private _datum: string;
  private _streetName: string;
  private _houseNumber: string;
  private _postalCode: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get datum(): string {
    return this._datum;
  }

  public set datum(value: string){
    this._datum = value;
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
  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public set phoneNumber(value: string) {
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

  public get streetName(): string {
    return this._streetName;
  }

  public set streetName(value: string) {
    this._streetName = value;
  }

  public get houseNumber(): string {
  return this._houseNumber;
}

  public set houseNumber(value: string) {
    this._houseNumber = value;
  }

  public get postalCode(): string {
    return this._postalCode;
  }

  public set postalCode(value: string) {
    this._postalCode = value;
  }

}
