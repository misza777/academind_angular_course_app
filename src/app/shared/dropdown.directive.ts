import {
  Directive, HostBinding, HostListener, ElementRef
} from'@angular/core';

@Directive({
selector:'[appDropdown]'
})
 export class DropdownDirective {
//jak isOpen jest true to dodaje class: open, jak jest false to remove
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {} 
 }

