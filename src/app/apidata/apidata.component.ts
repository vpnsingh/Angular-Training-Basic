import { Component, OnInit } from '@angular/core';
import { JsonService} from '../shared/json.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {

  Posts: any;
  constructor(private jservice : JsonService) { }

  ngOnInit(): void {
    this.fetchPost();
    this.fetchPhotos();
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
}
