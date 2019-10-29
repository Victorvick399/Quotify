import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
   name: string;
   author: string;
   line: string;
   description: string;
   postedtime: Date;

  @Output() addQuote = new EventEmitter<Quote>();
  showDetails: any;
  upvote:0;
  downvote:0;

  submitQuote(){
     const newQuote = {
      name : this.name,
      author : this.author,
      line: this.line,
      description: this.line,
      postedtime: Date,
      upvote:0,
      downvote: 0,
      showDetails:false,
    }
    this.addQuote.emit(newQuote)
  }

  

  constructor() { }

  ngOnInit() {
  }

}
