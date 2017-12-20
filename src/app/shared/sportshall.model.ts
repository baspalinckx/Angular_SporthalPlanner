import {SportsBuilding} from "./sportsbuilding.model";


export class SportsHall {


  private _sportsHallID: Number;
  private _price: Number;
  private _length: Number;
  private _width: Number;
  private _numberOfShowers: Number;
  private _numberOfDressingSpace: Number;
  private _openTime: Date;
  private _closeTime: Date;
  private _sportsBuilding: SportsBuilding;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  get sportsHallID(): Number {
    return this._sportsHallID;
  }

  set sportsHallID(value: Number) {
    this._sportsHallID = value;
  }
  get price(): Number {
    return this._price;
  }

  set price(value: Number) {
    this._price = value;
  }
  get length(): Number {
    return this._length;
  }

  set length(value: Number) {
    this._length = value;
  }
  get width(): Number {
    return this._width;
  }

  set width(value: Number) {
    this._width = value;
  }
  get numberOfShowers(): Number {
    return this._numberOfShowers;
  }

  set numberOfShowers(value: Number) {
    this._numberOfShowers = value;
  }
  get numberOfDressingSpace(): Number {
    return this._numberOfDressingSpace;
  }

  set numberOfDressingSpace(value: Number) {
    this._numberOfDressingSpace = value;
  }
  get openTime(): Date {
    return this._openTime;
  }

  set openTime(value: Date) {
    this._openTime = value;
  }
  get closeTime(): Date {
    return this._closeTime;
  }

  set closeTime(value: Date) {
    this._closeTime = value;
  }
  get sportsBuilding(): SportsBuilding {
    return this._sportsBuilding;
  }

  set sportsBuilding(value: SportsBuilding) {
    this._sportsBuilding = value;
  }



}
