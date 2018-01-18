export class Staff {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _startTime: string;
  private _endTime: string;
  private _mondayAvailabilty: string;
  private _tuesdayAvailabilty: string;
  private _wednesdayAvailabilty: string;
  private _thursdayAvailabilty: string;
  private _fridayAvailabilty: string;
  private _saturdayAvailabilty: string;
  private _sundayAvailabilty: string;
  private _phoneNumber: string;
  private _job: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get mondayAvailabilty(): string {
    return this._mondayAvailabilty;
  }

  public set mondayAvailabilty(value: string) {
    this._mondayAvailabilty = value;
  }

  public get tuesdayAvailabilty(): string {
    return this._tuesdayAvailabilty;
  }

  public set tuesdayAvailabilty(value: string) {
    this._tuesdayAvailabilty = value;
  }

  public get wednesdayAvailabilty(): string {
    return this._wednesdayAvailabilty;
  }

  public set wednesdayAvailabilty(value: string) {
    this._wednesdayAvailabilty = value;
  }

  public get thursdayAvailabilty(): string {
    return this._thursdayAvailabilty;
  }

  public set thursdayAvailabilty(value: string) {
    this._thursdayAvailabilty = value;
  }

  public get fridayAvailabilty(): string {
    return this._fridayAvailabilty;
  }

  public set fridayAvailabilty(value: string) {
    this._fridayAvailabilty = value;
  }

  public get saturdayAvailabilty(): string {
    return this._saturdayAvailabilty;
  }

  public set saturdayAvailabilty(value: string) {
    this._saturdayAvailabilty = value;
  }

  public get sundayAvailabilty(): string {
    return this._sundayAvailabilty;
  }

  public set sundayAvailabilty(value: string) {
    this._sundayAvailabilty = value;
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

  public get job(): string {
    return this._job;
  }

  public set job(value: string) {
    this._job = value;
  }

}
