import { Injectable } from '@angular/core';
import { movies } from './../content/movie.mock-data';
import { IMovie } from '../content/movie';

@Injectable()
export class MoviesService {
  folderPath:string = './assets/movie-covers/'
  constructor() { }

  getMovies(query: any){
    debugger;
     let fixedMovies = movies.map((movie) => {
      var newObj = Object.assign({}, movie);
      newObj.img = this.folderPath + movie.img
      return newObj;
    });
    let movieLength = fixedMovies.length;
    let startIndex = query.pageSize * (query.page - 1);
    let allMovies = fixedMovies.slice(startIndex, query.pageSize + startIndex);
    //fixedMovies.splice(query.pageSize * query.page, query.pageSize);
    return  {totalItems: movieLength, movies: allMovies }
    //fixedMovies;
  }

  getMovie(key: string){
    let movie = movies.find(m => m.key === key);
    movie.img = this.folderPath + movie.img;
    return movie;
  }
}
