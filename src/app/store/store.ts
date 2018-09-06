import * as MovieListActions from '../store/actions';
import { movies } from './../../content/movie.mock-data';
import { MoviesService } from './../movies.service';
import { IMovie, IQuery } from './../../content/movie';
import { GET_MOVIES } from './actions';


export interface IAppState {
  movies: IMovie[];
  query: any;
  PAGE_SIZE;
  filteredMovies:  {
    totalItems: number,
    movies: any[]
  };
}

export const INITIAL_STATE: IAppState = {
    movies: [],
    PAGE_SIZE: 8,
    query: {
        pageSize: function(){1
            return this.PAGE_SIZE
        },
        page: 1
    },
    filteredMovies: {
        totalItems: 0,
        movies: []
     }
}

export function rootReducer(state: IAppState = INITIAL_STATE, action: MovieListActions.MovieListActions): IAppState {
    switch(action.type){
          case MovieListActions.GET_MOVIES: 
          return {
              ...state, filteredMovies: action.filteredMovies
          }
          default:
          return state;
    }
}