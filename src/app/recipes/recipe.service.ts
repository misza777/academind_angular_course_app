import {Recipe} from "./recipe.model";

export class RecipeService {

  // budujemy model recepty, z private - nie mamy dostepu z zewnatrz
private recipes: Recipe[] = [
  new Recipe('Zupa Pomidorowa', "Superowa zupa dla kazdego na diecie!", "https://www.mniammniam.com/obrazki/zupa_pomidorowa.jpg" ),
  new Recipe('Zupa pieczarkowa z makaronem', "Extra pyszna zupa dla kazdego łasucha!", "https://www.mniammniam.com/obrazki/zupa_pieczarkimakaron4.jpg" )
];

getRecipes() {
  //zwracasz bezposrednia referencje do tej tablicy
  //slice tworzy nowa tablice - nie ma dostepu do tej tablicy zzewnatrz i tylko kopie dostajemy
  return this.recipes.slice();
}



 }
