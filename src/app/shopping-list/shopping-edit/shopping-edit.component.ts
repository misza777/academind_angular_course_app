import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter  } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// odczytanie wartoscie referencji
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

//emit event
@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {

  }

  ngOnInit(): void {
  }
  onAddItem() {
    // const bo nie zmieniamy wartosci zmiennych
    console.log(this.nameInputRef);
    console.log(this.amountInputRef);
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    console.log(ingName, ingAmount);

    const newIngredient = new Ingredient(ingName, ingAmount);
    // emisja eventu
    this.ingredientAdded.emit(newIngredient);
  }

}
