import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MoviesService } from '../movies.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      declarations: [ MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an array', () => {
    
  })

  it('should contain totalItems count',() => {
    let fixture = TestBed.createComponent(MoviesComponent);
    let app = fixture.debugElement.componentInstance;
    let movieService = fixture.debugElement.injector.get(MoviesService);
    fixture.detectChanges();
    expect(app.filteredMovies.totalItems).toBeGreaterThan(0);
  })

  // it('should be of type array',() => {
  //   let fixture = TestBed.createComponent(MoviesComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let movieService = fixture.debugElement.injector.get(MoviesService);
  //   // expect(typeof movieService.getMovies(app.query).movies).toBe(typeof)
  // })
});
