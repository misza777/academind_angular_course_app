// import { EventEmitter } from "@angular/core";
import {Subject} from 'rxjs';
import {Ingredient} from "../shared/ingredient.model";
export class ShoppingListService {
// ingredientsChanged = new EventEmitter<Ingredient[]>()
ingredientsChanged = new Subject<Ingredient[]>()
startedEditingItem = new Subject<number>()

private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Cucumber', 10),
  ];

  getIngredients() {
    //slice() kopiuje tablice! tzn. daje referencje
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      //pass a copy
      // this.ingredientsChanged.emit(this.ingredients.slice());
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
// for (let ingredient of ingredients) {
//   this.addIngredient(ingredient);
// }

//spread operator array into list of elements a push sobie radzi z lista!
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
  }

updateIngredient(index:number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());
  }

}
