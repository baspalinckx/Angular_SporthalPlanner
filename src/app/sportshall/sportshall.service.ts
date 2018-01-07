import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {SportsHall} from "../shared/sportshall.model";
import {Http} from "@angular/http";

@Injectable()
export class SportshallService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrlSportshall = environment.serverUrl + "/Sportshalls";

  constructor(private http: Http) { }


  // Sportshalls
  getSportshalls() {
    return this.http.get( this.serverUrlSportshall)
      .toPromise()
      .then(response => {
        return response.json() as SportsHall[];
      })
      .catch(error => {
        return error;
      });
  }

  // Sportshalls by id
  getSportshallById(id: string) {
    console.log(this.serverUrlSportshall + '/' + id);
    return this.http.get( this.serverUrlSportshall + '/' + id)
      .toPromise()
      .then(response => {
        return response.json() as SportsHall;
      })
      .catch(error => {
        return error;
      });
  }
}
