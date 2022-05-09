import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { randomUserURL,postsURL,photosURL } from './api.url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http : HttpClient) { }

  getPosts(){
    return this.http.get(postsURL);
  }

  getPhotos(){
    return this.http.get(photosURL);
  }

  getRandomUser(){
    return this.http.get(randomUserURL);
  }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
