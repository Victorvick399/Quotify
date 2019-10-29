import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getdate'
})
export class GetdatePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001;
    var posttime = dateDifferenceSeconds/secondsInDay;

    if (posttime >= 1 && value > todayWithNoTime){
      return 0;
    }else{
      return posttime;
    }
  }

} 
