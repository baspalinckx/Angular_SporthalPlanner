
import {Injectable} from '@angular/core';
import {Reservation} from '../shared/reservations.model';
import {Subject} from 'rxjs/Subject';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
import {ReservationweekModel} from "../shared/reservationweek.model";
import {SportsHall} from '../shared/sportshall.model';

@Injectable()
export class ReservationService {
  reservationChanged = new Subject<Reservation[]>();


  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrlReserve = environment.serverUrl + '/reserve';
  private serverUrlSporthalls = environment.serverUrl + '/sportshalls';
  private serverUrlCustomer = environment.serverMongoUrl + '/customers';
  private reservations: Reservation[] = [
    new Reservation({context: 'Reservation', startTime: '10:00:00', endTime: '12:00:00' }
    ),
    new Reservation(
      {context: 'Maintenance', startTime: '12:00:00', endTime: '12:30:00'}
    ),
    new Reservation(
      {context: 'Reservation', startTime: '10:00:00', endTime: '11:00:00'}
    ),
    new Reservation(
      {context: 'Maintenance', startTime: '12:00:00', endTime: '12:30:00'}
    ),
    new Reservation(
      {context: 'Maintenance', startTime: '12:00:00', endTime: '12:30:00'}
    )
  ];

  private reservationsWeek: ReservationweekModel[];

  constructor(private http: Http) {
  }

  // Reservation

  getReservations() {
    return this.http.get( this.serverUrlReserve, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservations = response.json() as Reservation[];
        return response.json() as Reservation[];
      })
      .catch(error => {
        return error;
      });
  }

  getReservationById(id: number) {
    return this.http.get( this.serverUrlReserve + '/SporthalId?id=' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        // this.reservations = response.json() as Reservation[];
        return response.json() as SportsHall;
      })
      .catch(error => {
        return error;
      });
  }

  getReservationsByEmail(id: number, email: string) {
    return this.http.get( this.serverUrlReserve + '/email?id=' + id + '&email=' + email, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservations = response.json() as Reservation[];
        return response.json() as Reservation[];
      })
      .catch(error => {
        return error;
      });
  }

  getReservationsS(id: string, date: string) {
  console.log(this.serverUrlReserve + '/SporthalId?id=' + id + '&dateTime=' + date);
    return this.http.get( this.serverUrlReserve + '/SporthalId?id=' + id + '&dateTime=' + date, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservations = response.json() as Reservation[];
        return response.json() as Reservation[];
      })
      .catch(error => {
        return error;
      });

  }

  getReservationsWeek(id: string, monday: string, sunday: string) {
    console.log(this.serverUrlReserve + '/ReserveWeek?id=' + id + '&monday=' + monday + '&sunday=' + sunday);
    return this.http.get( this.serverUrlReserve + '/ReserveWeek?id=' + id + '&monday=' + monday + '&sunday=' + sunday, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservationsWeek = response.json() as ReservationweekModel[];
        console.log(response);
        return response.json() as Reservation[];
      })
      .catch(error => {
        return error;
      });

  }

  addReservation(reservation: Reservation) {

    return this.http.post(this.serverUrlReserve, {
      "firstName": reservation.firstName,
      "lastName": reservation.lastName,
      "email": reservation.email,
      "context": reservation.context,
      "phoneNumber": reservation.phoneNumber,
      "datum": reservation.datum,
      "startTime": new Date(reservation.startTime).toISOString(),
      "endTime": new Date(reservation.endTime).toISOString(),
      "sportsHall": reservation.sportsHall,
      "sport": reservation.sport
    },
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservationChanged.next();
      })
      .catch( res => {
        console.log('rejected');
      });
  }

  getCustomer(email: String) {
    return this.http.get(this.serverUrlCustomer + '/' + email, {headers: this.headers})
      .toPromise()
      .then(response => {
        if (response.text() === '') {
        return 'fout';
        } else {
          return response.json() as Reservation;
        }
      });
  }

  getCustomers() {
    return this.http.get(this.serverUrlCustomer, {headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json() as Reservation[];
      });
  }

  addCustomer(customer: Reservation){
    return this.http.post(this.serverUrlCustomer, {
        "firstName": customer.firstName,
        "lastName": customer.lastName,
        "email": customer.email,
        "streetName": customer.streetName,
        "phoneNumber": customer.phoneNumber,
        "houseNumber": customer.houseNumber,
        "postalCode": customer.postalCode
      },
      {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservationChanged.next();
      })
      .catch( res => {

      });
      }



}
