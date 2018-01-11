import {SportsBuilding} from "./sportsbuilding.model";
import {Sport} from "./sport.model";


export class SportshallssportModel {


  private _sport: Sport;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  get sport(): Sport {
    return this._sport;
  }

  set sport(value: Sport) {
    this._sport = value;
  }
}
