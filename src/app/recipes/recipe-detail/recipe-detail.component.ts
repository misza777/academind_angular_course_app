import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
// import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// @Input()
receivedRecipe: Recipe;
id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //to mozesz pobrac tylko raz
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.receivedRecipe = this.recipeService.getRecipe(this.id);
      }
      //cleanup your observables!
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.receivedRecipe.ingredients);
  }

  onEditRecipe() {
    //1
    // this.router.navigate(['edit'], {relativeTo: this.route});
    //2
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

}
