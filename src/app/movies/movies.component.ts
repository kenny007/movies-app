import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { movies } from './../../content/movie.mock-data';
import {IMovie} from './../../content/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  folderPath:string = "./../../content/assets/images/movie-covers/";
  movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) { 
   // this.movies = this.moviesService.getMovies();
  }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    //console.log(this.movies);
    //   this.movies = movies.map((movie) => {
    //   var newObj = Object.assign({}, movie);
    //   newObj.img = this.folderPath + movie.img
    //   return newObj;
    //  })
  }
  
}
