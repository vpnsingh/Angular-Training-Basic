import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';
 
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  application = "Angular Training";
  age = 25;
  isDisabled:boolean = true;
  newClass = 'text-danger';
  hasError = false;
  isSpecial = true;
  messageClasses = {
    'text-primary': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };
  highlightColor = 'orange';
  titleStyles = {
    backgroundColor: 'grey',
    color: 'blue',
    fontStyle: 'italic'
  };

  typeValue = '';
  mydate;
  constructor(private common : CommonService) { }

  ngOnInit(): void {
    this.mydate = this.common.getData();
    this.storeData();
  }

  myClickFunction(event) {
    alert('Button is clicked');
    console.log('This is event' + event);
  }

  updateValue(){
    this.common.currentValue = this.typeValue;
  }

  storeData(){
    localStorage.setItem('event-name', 'Mono2020');
    localStorage.setItem('event-location', 'Mumbai');
    localStorage.setItem('event-type', 'Celebration');
  }
}
