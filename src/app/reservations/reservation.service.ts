import {Injectable} from "@angular/core";
import {Reservation} from "../shared/reservations.model";
import {Subject} from "rxjs/Subject";
import {Http, Headers} from "@angular/http";
import {environment} from '../../environments/environment';
import {SportsHall} from "../shared/sportshall.model";


@Injectable()
export class ReservationService {
  reservationChanged = new Subject<Reservation[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrlReserve = environment.serverUrl;
  private serverUrlSportshall = environment.serverUrlSportshall;
  private reservations: Reservation[] = [
    new Reservation({context: 'test', }
    ),
    new Reservation(
      {context: 'test2'}
    ),
    new Reservation(
      {context: 'test3'}
    )
  ];
  constructor(private http: Http) {

  }

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





  getSportshalls() {
    return this.http.get( this.serverUrlSportshall, {headers: this.headers})
      .toPromise()
      .then(response => {
        // this.reservations = response.json() as Reservation[];
        return response.json() as SportsHall[];
      })
      .catch(error => {
        return error;
      });


  }


    /*return this.reservations.slice();*/



  //
  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }
  //
  // addRecipe(recipe: Recipe) {
  //   return this.http.post(this.serverUrl, recipe, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       this.recipesChanged.next(this.recipes.slice());
  //     });
  // }
  //
  // updateRecipe(index: string, newRecipe: Recipe) {
  //   return this.http.put(this.serverUrl + index, newRecipe, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       this.recipesChanged.next(this.recipes.slice());
  //     });
  // }
  //
  // deleteRecipe(index: string) {
  //   return this.http.delete(this.serverUrl + index, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       this.recipesChanged.next(this.recipes.slice());
  //     });
  // }
}
