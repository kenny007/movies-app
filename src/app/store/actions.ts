import { IQuery } from './../../content/movie';
import {Action} from 'redux'

export const GET_MOVIES = 'GET_MOVIES';

export class getMovies implements Action {
  readonly type = GET_MOVIES;
  filteredMovies: IQuery;   
}

export type MovieListActions = getMovies;