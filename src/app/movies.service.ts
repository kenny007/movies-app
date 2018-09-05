import { Injectable } from '@angular/core';
import { movies } from './../content/movie.mock-data';
import { IMovie } from '../content/movie';

@Injectable()
export class MoviesService {
  folderPath:string = './assets/movie-covers/'
  constructor() { }

  getMovies(query: any){
     let fixedMovies = movies.map((movie) => {
      var newObj = Object.assign({}, movie);
      newObj.img = this.folderPath + movie.img
      return newObj;
    });
    //fixedMovies.splice(query.pageSize * query.page, query.pageSize);
    return fixedMovies;
  }

  getMovie(key: string){
    let movie = movies.find(m => m.key === key);
    movie.img = this.folderPath + movie.img;
    return movie;
  }
}
