import { genreType } from './../../content/movie.model';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { movies } from './../../content/movie.mock-data';
import { IMovie, IQuery } from './../../content/movie';
import { isNull } from 'util';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  genres:any =  Object.values(genreType);
  private readonly PAGE_SIZE = 8;
  filteredMovies: IQuery = {
    totalItems: 0,
    movies: []
  };
  movies: IMovie[] = [];

  query: any = {
    pageSize: this.PAGE_SIZE,
    page: 1
  };

  constructor(private moviesService: MoviesService) { 
    this.movies = this.populateMovies().movies;
    this.filteredMovies.movies = this.movies;
    this.filteredMovies.totalItems = this.populateMovies().totalItems;
  }

  searchClick(){
  var movies = this.movies; 
    if(this.query.name)
    movies = movies.filter(m => m.name.toLocaleLowerCase()
                   .indexOf(this.query.name.toLocaleLowerCase())!== -1);

    if(this.query.genre)
    movies = movies.filter(m => m.genres.indexOf(this.query.genre) > -1)

    this.filteredMovies.movies = movies;
    return this.filteredMovies.movies;
  }
  
  movieNameEmpty(){
    if(this.query.name == ''){
      this.filteredMovies.movies = this.searchClick()
    }
  }

  private populateMovies(): IQuery {
    return this.moviesService.getMovies(this.query);
  }

  onPageChange(page){
    this.query.page = page;
    let result = this.populateMovies();
    this.filteredMovies.movies =  result.movies;
   }

  genreClick(product){
    this.movies = this.movies.filter((movie) => {
      movie.genres.filter((g) => { g === product})
    })
  }
}
