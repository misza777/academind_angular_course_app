import { Component,
  // ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  // Output,
  // ViewChild, EventEmitter
  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping.list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') slForm: NgForm;

subscription: Subscription;
editMode = false;
editedItemIndex: number;
editedItem: Ingredient;

  // odczytanie wartoscie referencji
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

//emit event
// @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) {

  }

  ngOnInit() {
    this.subscription = this.slService.startedEditingItem.subscribe(
      (index: number) =>{
this.editedItemIndex = index;
this.editMode = true;
this.editedItem = this.slService.getIngredient(index);
this.slForm.setValue({
  name: this.editedItem.name,
  amount: this.editedItem.amount,
})
      }
    );
  }

  onSubmit(form: NgForm) {
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
if (this.editMode) {
  this.slService.updateIngredient(this.editedItemIndex, newIngredient);
} else {
  this.slService.addIngredient(newIngredient);
}
this.editMode = false;
form.reset();
};

onClear() {
  this.slForm.reset();
  this.editMode = false;
}

onDelete() {
  this.slService.deleteIngredient(this.editedItemIndex)
  this.onClear();
}

  //no memory leak
ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
