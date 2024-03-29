import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  //highest: number=0;

  quoteDelete(details:boolean){
    this.isComplete.emit(details)
  }

  addUpvotes(param) {
    console.log(param);
    this.quote.upvote +=1;
    
  }
  addDownvotes(index) {
    this.quote.downvote +=1;
  }

  

  constructor() { }

  ngOnInit() {
  }

}
