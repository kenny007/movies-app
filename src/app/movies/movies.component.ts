import { genreType } from './../../content/movie.model';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { movies } from './../../content/movie.mock-data';
import {IMovie} from './../../content/movie';
import { isNull } from 'util';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  folderPath:string = "./assets/movie-covers/";
  genres:any =  Object.values(genreType);
  private readonly PAGE_SIZE = 9;
  filteredMovies: IMovie[];
  movies: IMovie[] = [];

  query: any = {
    pageSize: this.PAGE_SIZE
  };

  // set listFilter(value: string){
  //    debugger;
  //    this.query.page = 1;
  //    this.query._listFilter = value;
  //    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  // }

  constructor(private moviesService: MoviesService) { 
    this.movies = this.populateMovies();
    this.filteredMovies = this.movies;
  }

  searchClick(){
  debugger;
  var movies = this.movies; 
    if(this.query.name)
    movies = movies.filter(m => m.name.toLocaleLowerCase()
          .indexOf(this.query.name.toLocaleLowerCase())!== -1);

    if(this.query.genre)
    movies = movies.filter(m => m.genres.indexOf(this.query.genre) > -1)

    this.filteredMovies = movies;
    return this.filteredMovies;
  }
  
  movieNameEmpty(){
    if(this.query.name == ''){
      this.filteredMovies = this.searchClick()
    }
  }

  populateMovies(){
    return this.moviesService.getMovies(this.query);
  }


  onPageChange(page){
    this.query.page = page;
    this.populateMovies();
   }

  resetFilter(){
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE
    };
    this.populateMovies();
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
