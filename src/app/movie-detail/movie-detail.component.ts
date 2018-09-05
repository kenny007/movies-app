import { IMovie } from './../../content/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movieKey: string;
movie: IMovie;

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MoviesService) { 
    route.params.subscribe((p) => {
    this.movieKey = p['key'];
    if(typeof this.movieKey !== "string" || !this.movieKey ) 
       router.navigate(['/'])
       return;
    })
  }

  ngOnInit() {
    this.movie =  this.movieService.getMovie(this.movieKey);
  }

}
