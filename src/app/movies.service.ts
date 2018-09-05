import { Injectable } from '@angular/core';
import { movies } from './../content/movie.mock-data';
import { IMovie } from '../content/movie';


@Injectable()
export class MoviesService {
  folderPath:string = "./../../content/assets/images/movie-covers/";

  constructor() { }

  getMovies(){
    return movies.map((movie) => {
      var newObj = Object.assign({}, movie);
      newObj.img = this.folderPath + movie.img
      return newObj;
    });
  }

  getMovie(key: string){
    let movie = movies.find(m => m.key === key);
    movie.img = this.folderPath + movie.img;
    return movie;
  }
}
