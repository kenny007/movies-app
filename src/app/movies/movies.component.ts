import { Component, OnInit } from '@angular/core';
import { movies } from './../../content/movie.mock-data';
import {IMovie} from './../../content/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  folderPath:string = "./../../content/assets/images/movie-covers/";
  movies: IMovie[] = [];

  constructor() { }

  ngOnInit() {
    
    this.movies = movies.map((movie) => {
      debugger;
      var newObj = Object.assign({}, movie);
      newObj.img = this.folderPath + movie.img
      return newObj;
    });
    console.log(this.movies);
  }
}
