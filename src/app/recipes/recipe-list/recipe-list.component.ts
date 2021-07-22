import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // budujemy model recepty
recipes: Recipe[] = [
  new Recipe('Zupa Pomidorowa', 'Superowa zupa dla kazdego!', "https://www.mniammniam.com/obrazki/zupa_pomidorowa.jpg" )
];
  constructor() { }

  ngOnInit(): void {
  }

}
