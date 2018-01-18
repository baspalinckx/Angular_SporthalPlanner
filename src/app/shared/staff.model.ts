export class Staff {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phoneNumber: string;
  private _job: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
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

  public get job(): string {
    return this._job;
  }

  public set job(value: string) {
    this._job = value;
  }

}
