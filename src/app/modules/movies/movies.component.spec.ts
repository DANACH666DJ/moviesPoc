import { TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {  HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movies.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        MoviesComponent
       ],
      providers: [
        MovieService
      ]
    })
    .compileComponents();
  });

   // propertys needed for testings
   function setup() {
    const fixture = TestBed.createComponent(MoviesComponent);
    const component = fixture.debugElement.componentInstance;
    const moviesService = TestBed.inject(MovieService);

    return { fixture, component,  moviesService };
  }

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
