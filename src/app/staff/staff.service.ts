import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Headers, Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class StaffService {
  membersChanged = new Subject<Staff[]>();
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private members: Staff[];

  constructor(private http: Http) {}

  AddStaff(staff: Staff) {
    this.http.post(environment.serverUrl + '/staff', staff , { headers: this.headers})
      .toPromise()
      .then(response => {
        this.membersChanged.next(this.members.slice());
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
