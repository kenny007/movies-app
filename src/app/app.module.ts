import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesService } from './movies.service';
import { PaginationComponent } from './shared/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: MoviesComponent },
      {path:'movies/:key', component: MovieDetailComponent }
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,  
    NO_ERRORS_SCHEMA
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
