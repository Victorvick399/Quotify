import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] =[
    new Quote ('Matteo Darmian','Victor Ndungi','Life is pain', new Date(10,8,2019), 0, 0),
    new Quote ('Victor Ndungi','Thanos',"I know what it's like to lose.To feel so desparately that you're right, yet to fail nonetheless.Dread it. Run from it.Destiny still arrives. ", new Date(23,10,2019),0,0)
  ]

  toggleDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails;
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
    }
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }


  addNewQuote(quote){
    // let quoteLength = this.quotes.length;
    // quote.id = quoteLength +1;
    // quote.postedtime = newDate(quote.postedtime);
    this.quotes.push(quote);
    console.log(this.quotes)
  }

  

  constructor() { } 

  ngOnInit() {
  }

}
