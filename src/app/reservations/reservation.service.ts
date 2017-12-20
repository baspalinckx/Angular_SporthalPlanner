import {Injectable} from "@angular/core";
import {Reservation} from "./reservations.model";
import {Subject} from "rxjs/Subject";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ReservationService {
  reservationChanged = new Subject<Reservation[]>();

  private serverUrl = environment.serverUrl + '/home/';
  private headers = new Headers({'Content-Type': 'application/json'});
  // private serverUrl = environment.serverUrl + '/recipes/'; // URL to web api

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
    // return this.http.get(this.serverUrl, {headers: this.headers})
    //   .toPromise()
    //   .then(response => {
    //     this.recipes = response.json().recipe as Recipe[];
    //     return response.json().recipe as Recipe[];
    //   })
    //   .catch(error => {
    //     return error;
    //   });

    return this.reservations.slice();
  }

  addReservation(reservation: Reservation) {
    console.log('addReservation');
    return this.http.post(this.serverUrl, reservation, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.reservationChanged.next();
      });
  }

  // updateGame(index: string, newGame: Reservation) {
  //   return this.http.put(this.serverUrl + index, newReservation, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       this.reservationChanged.next();
  //     });
  // }

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
