export class Quote {
  showDetails: boolean;
  upvote:number;
  downvote:number;
  constructor(public name: string,public author: string,public line : string,public description: string, public postedtime : Date){
    this.showDetails=false;
    this.upvote=0;
    this.downvote=0;
  }
}
