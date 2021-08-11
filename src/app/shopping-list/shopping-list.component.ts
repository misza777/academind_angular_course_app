import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping.list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
// to robimy po to zeby zlikwidowac subskrypcje - good practice
private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    //store in inChangeSub
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(

        (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
        }
    )
      }

  // onIngredientAdded(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
  // }

ngOnDestroy(){
  this.igChangeSub.unsubscribe();
}
onEditItem(index: number){
  this.slService.startedEditingItem.next(index);
}

      }
