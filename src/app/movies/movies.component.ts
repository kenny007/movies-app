import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { movies } from './../../content/movie.mock-data';
import {IMovie} from './../../content/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  folderPath:string = "./assets/movie-covers/";
  _listFilter: string;
  // filter: any = {
  // }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
     debugger;
     this._listFilter = value;
     this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  filteredMovies: IMovie[];
  movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) { 
    this.movies = this.moviesService.getMovies();
    this.filteredMovies = this.movies;
    this.listFilter = '';
    // this.movies = this.moviesService.getMovies();
   }

  performFilter(filterBy: string): IMovie[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.movies.filter((movie: IMovie) => movie.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }
 

  // ngOnInit() {
  //   this.movies = this.moviesService.getMovies();
  // }
  
  genreClick(product){
    debugger;
    this.movies = this.movies.filter((movie) => {
      movie.genres.filter((g) => { g === product})
    })
  }
}
