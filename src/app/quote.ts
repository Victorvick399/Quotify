export class Quote {
  showDetails: boolean;
  constructor(public name: string,public author: string,public line : string, public postedtime : Date,public upvote:number ,public downvote:number){
    this.showDetails=false;
    this.upvote=0;
    this.downvote=0;
  }
}
