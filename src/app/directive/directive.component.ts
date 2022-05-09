import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isAvailable: boolean = false;

  colors = ['Red', 'Green', 'Blue', 'Black', 'Yellow'];

  employeeData = [
    {
      id: 1, name: 'ABC', age: 25,
    },
    {
      id: 2, name: 'DEF', age: 30,
    },
    {
      id: 3, name: 'GHI', age: 35,
    },
    {
      id: 4, name: 'JKL', age: 40,
    }
  ];

  vehicle = 'train';
  myValue;
  info1 : any;
  info2 : any;
  info3 : any;
  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    // 
    this.myValue = this.commonService.currentValue;
    this.getDataFromStorage();
  }

  getDataFromStorage(){
    this.info1 = localStorage.getItem('event-name');
    this.info2 = localStorage.getItem('event-location');
    this.info3 = localStorage.getItem('event-type');
  }
}
