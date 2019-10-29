import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(private elem:ElementRef) {}
    
  

}