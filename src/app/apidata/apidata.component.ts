import { Component, OnInit } from '@angular/core';
import { JsonService} from '../shared/json.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {

  Posts: any;
  userData : any;
  constructor(private jservice : JsonService) { }

  ngOnInit(): void {
    this.fetchPost();
    this.fetchPhotos();
    this.fetchRandomUser();
  }

  fetchPost(){
    this.jservice.getPosts().subscribe(res => {
      console.log('api data', res);
      this.Posts = res;
    })
  }

  fetchPhotos(){
    this.jservice.getPhotos().subscribe(res => {
      console.log('photo data', res);
    })
  }

  fetchRandomUser(){
    this.jservice.getRandomUser().subscribe((res:any) => {
      console.log('random user', res.results[0]);
      this.userData = res.results[0];
    })
  }
}
