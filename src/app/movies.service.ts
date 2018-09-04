import { Injectable } from '@angular/core';
import { movies } from './../content/movie.mock-data';


@Injectable()
export class MoviesService {

  movies:any[] = movies;

  constructor() { }

  getMovies(){
    return this.movies;
  }
}
