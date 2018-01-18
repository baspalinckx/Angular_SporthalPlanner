import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Headers, Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Staff} from "../shared/staff.model";
import {Planning} from "../shared/planning.model";

@Injectable()
export class StaffService {
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getPlanningByEmail(email: string){
    return this.http.get(environment.serverMongoUrl + '/planningen/' + email)
      .toPromise()
      .then(res => {
        return res.json() as Planning[];
      })
      .catch(err => {
        return err;
      });
  }

  searchStaff(email: string){
    return this.http.get(environment.serverMongoUrl + '/staff/' + email)
      .toPromise()
      .then(res => {
          return res.json() as Staff;
      })
      .catch(err => {
        return err;
      });
  }

  addStaff(staff: Staff) {
    let body = {
      "firstName": staff.firstName,
      "lastName": staff.lastName,
      "phoneNumber": staff.phoneNumber,
      "email": staff.email,
      "job": staff.job
    };

    this.http.post(environment.serverMongoUrl + '/staff', body , { headers: this.headers})
      .toPromise()
      .then(response => {
      })
      .catch(error => {
        return error;
      });
  }
}
