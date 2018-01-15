import {Reservation} from './reservations.model';

export class Customer {
  private _email: string;
  private _reserve: [Reservation];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string){
    this._email = value;
  }

  public get reserve(): [Reservation] {
    return this._reserve;
  }

  public set reserve(value: [Reservation]) {
    this._reserve = value;
  }

}
