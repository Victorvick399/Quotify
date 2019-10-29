import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color= 'blue';
  }
    
}