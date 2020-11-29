import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  todayDate;
  currentValue = 'Virat';

  constructor() { }

  getData(){
    this.todayDate = new Date();
    return this.todayDate;
  }

  getBasic(){
    console.log("For Testing")
  }
}
