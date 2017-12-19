import {SportsBuilding} from "./sportsbuilding.model";
import {Sport} from "./sport.model";

export class SportsHall {
  constructor(public sportsHallID: Number, public price: Number,
              public length: Number, public width: Number,
              public numberOfShowers: Number, public numberOfDressingSpace: Number,
              public openTime: Date, public closeTime: Date,
              public sportsBuilding: SportsBuilding, public Sports: [Sport]
              ) {}
}
