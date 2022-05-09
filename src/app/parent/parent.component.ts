import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dynamicdata = 'This is dynamic data!';
  interval: any;
  chatItems: Array<string> = [];
  constructor() { }

  ngOnInit() {}

  start() {
    this.interval = setInterval(() => {
      this.dynamicdata = new Date().toLocaleTimeString();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    localStorage.clear();
  }

  talkBack(e: string) {
    this.chatItems.push(e);
  }

}
