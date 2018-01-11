
import {Injectable} from '@angular/core';
import {Reservation} from '../shared/reservations.model';
import {Subject} from 'rxjs/Subject';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ReservationService {
  reservationChanged = new Subject<Reservation[]>();


  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrlReserve = environment.serverUrl + '/reserve';
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
      "sportsHall": reservation.sportsHall
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
        console.log(response.text());
        if (response.text() === '') {
        return 'fout';
        } else {
          return response.json() as Reservation;
        }


      });

  }

  addCustomer(customer: Reservation){
    console.log(customer.postalCode)
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
        console.log('fout');
      });
      }



}
