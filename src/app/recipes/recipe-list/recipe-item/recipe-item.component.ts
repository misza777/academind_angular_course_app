import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  // import danych z array of recipes
  @Input() recipeItem: Recipe;
//export danych do komponentu recipe-detail, void - contain no information
  @Output() recipeSelected= new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  getRecipeDetail() {
    //emitujemy event clika bez danch
    this.recipeSelected.emit();
  };
}
