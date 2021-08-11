import { Component,
  // ElementRef,
  OnInit,
  // Output,
  // ViewChild, EventEmitter
  } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping.list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// odczytanie wartoscie referencji
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

//emit event
// @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit(): void {
  }
  onAddItem(form: NgForm) {
    // const bo nie zmieniamy wartosci zmiennych
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;

    // form
    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);
    // const newIngredient = new Ingredient(ingName, ingAmount);
    // emisja eventu
    // this.ingredientAdded.emit(newIngredient);

    //metody z slService

    this.slService.addIngredient(newIngredient);

  }

}
