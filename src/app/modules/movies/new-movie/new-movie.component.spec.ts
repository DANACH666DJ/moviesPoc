import {  TestBed } from '@angular/core/testing';

import { NewMovieComponent } from './new-movie.component';
import { MovieService } from '../../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule  } from '@angular/router/testing';
import {  HttpClientModule } from '@angular/common/http';

describe('NewMovieComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ NewMovieComponent ]
    })
    .compileComponents();
  });

 // propertys needed for testings
 function setup() {
  const fixture = TestBed.createComponent(NewMovieComponent);
  const component = fixture.debugElement.componentInstance;
  const moviesService = TestBed.inject(MovieService);

  return { fixture, component,  moviesService };
}

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
