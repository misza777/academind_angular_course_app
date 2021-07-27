import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //drugi event click przekazywany z recipe-list do recipes
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  // budujemy model recepty
recipes: Recipe[] = [
  new Recipe('Zupa Pomidorowa', "Superowa zupa dla kazdego na diecie!", "https://www.mniammniam.com/obrazki/zupa_pomidorowa.jpg" ),
  new Recipe('Zupa pieczarkowa z makaronem', "Extra pyszna zupa dla kazdego łasucha!", "https://www.mniammniam.com/obrazki/zupa_pieczarkimakaron4.jpg" )
];
  constructor() { }

  ngOnInit(): void {
  }

  getNewRecipe= () => {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
