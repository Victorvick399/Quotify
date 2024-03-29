import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
 
  newQuote= new Quote("","","",new Date(),0,0);

  @Output() addQuote = new EventEmitter<Quote>();
  //showDetails: any;

  submitQuote(){
    this.newQuote.upvote=0;
    this.newQuote.downvote=0;
    this.addQuote.emit(this.newQuote);

    this.newQuote = new Quote ("","","",new Date(),0, 0);
  }

  

  constructor() { }

  ngOnInit() {
  }

}
