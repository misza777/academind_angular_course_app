import { EventEmitter, Injectable } from "@angular/core";
import {Recipe} from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.list.service";


@Injectable()
export class RecipeService {
  //zawiera dane Recipe
recipeSelected = new EventEmitter<Recipe>();

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
}
