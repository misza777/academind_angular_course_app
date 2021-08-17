import {
  // EventEmitter,
  Injectable } from "@angular/core";
  // import { Subject } from "rxjs";
import {Recipe} from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.list.service";
import { Subject } from "rxjs";
import { ThrowStmt } from "@angular/compiler";


@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();


  //zawiera dane Recipe
// recipeSelected = new EventEmitter<Recipe>();
// recipeSelected = new Subject<Recipe>();

  // budujemy model recepty, z private - nie mamy dostepu z zewnatrz
private recipes: Recipe[] = [
  new Recipe(
    'Zupa Pomidorowa',
  "Superowa zupa dla kazdego na diecie!",
  "https://www.mniammniam.com/obrazki/zupa_pomidorowa.jpg",
   [
     new Ingredient ('Meat', 1),
     new Ingredient ('Fries', 10)
   ]),
  new Recipe('Zupa pieczarkowa z makaronem', "Extra pyszna zupa dla kazdego łasucha!", "https://www.mniammniam.com/obrazki/zupa_pieczarkimakaron4.jpg",
  [
    new Ingredient ('Butter', 1),
    new Ingredient ('Plums', 10)
  ] )
];

constructor(private slService: ShoppingListService) {}

getRecipes() {
  //zwracasz bezposrednia referencje do tej tablicy
  //slice tworzy nowa tablice - nie ma dostepu do tej tablicy zzewnatrz i tylko kopie dostajemy - slice tylko kopiuje
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
 }

 getRecipe(id: number) {
  //  return this.recipes.slice()[id];
  console.log(id);
   return this.recipes[id];
 }

 addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  //emitujemy nasluchiwanie
  this.recipesChanged.next(this.recipes.slice());
 }
 updateRecipe(index: number, newRecipe: Recipe) {
   this.recipes[index] = newRecipe;
   //emitujemy nasluchiwanie i nasluchujemy w recipe-list
   this.recipesChanged.next(this.recipes.slice());
 }

 deleteRecipe(index:number) {
  //  remove el
   this.recipes.splice(index,1);
   //emit a copy 
   this.recipesChanged.next(this.recipes.slice());
 }
}
