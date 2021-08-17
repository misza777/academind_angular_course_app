import { Component, OnDestroy, OnInit,
  // Output,EventEmitter
 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //drugi event click przekazywany z recipe-list do recipes
// @Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[];
subscription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe= () => {
    // nawiguje do recipes/new plus relacja do current route
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  ngOnDestroy(){
this.subscription.unsubscribe();
  }
}
