import { IMovie } from './../../content/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie : IMovie;
  @Input('show-actions') showActions = true;
  @Input('genreFilter') genreFilter;

  constructor(private router: Router) { }
    
   viewDetail(){
     this.router.navigate(['/movies/', this.movie.key]);
     //this.change.emit(this.movie.key);
   }
   
    ngOnInit() {
    }

    addToFavorite(){
0
    }

   filterMovie(genre){
      this.genreFilter(genre);
   }

    addToCartFavorite(){
      //this.cartService.addToCart(this.product);
    }
 
    removeFromFavorite(){
      //this.cartService.removeFromCart(this.product);
    }
 
    getQuantity(){
      
    }

}
