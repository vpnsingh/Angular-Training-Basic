import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  title1 = "google meet";
  title2 = "Zoom Meeting";
  todaydate = new Date();
  jsonval =
          {
            name: 'Rox',
            age: '25',
            address:
                  {
                      a1: 'Mumbai',
                      a2: 'Karnataka'
                  }
          };

  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
  'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  loadForms(){
    this.router.navigate(['forms', 'Hello From Pipe']);
  }
}
