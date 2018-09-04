import { IMovie } from './../../content/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie : IMovie;
  @Input('show-actions') showActions = true;

  constructor() { }

    ngOnInit() {
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
