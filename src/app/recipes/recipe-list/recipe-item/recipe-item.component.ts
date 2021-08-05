import { Component, Input, OnInit,
  // Output, EventEmitter
 } from '@angular/core';

import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  // import danych z array of recipes
  @Input() recipeItem: Recipe;
  // pobieramy index z recipe-list
  @Input() id:number;

  //export danych do komponentu recipe-detail, void - contain no information
  // @Output() recipeSelected= new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) {
  // }


  ngOnInit() {
  }

  // getRecipeDetail() {
    // 1
    //emitujemy event clika bez danch
    // this.recipeSelected.emit();
    // 2
    // this.recipeService.recipeSelected.emit(this.recipeItem);
  // };
}
