export class Closing {
  private id: string;
  private _date: string;
  private _starttime: string;
  private _endtime: string;


  public get _id() {
    return this.id;
  }

  public set _id(n: string) {
    this.id = n;
  }

  public get date() {
    return this._date;
  }

  public set date(n: string) {
    this._date = n;
  }

  public get starttime() {
    return this._starttime;
  }

  public set starttime(n: string) {
    this._starttime = n;
  }

  public get endtime() {
    return this._endtime;
  }

  public set endtime(n: string) {
    this._endtime = n;
  }
}
