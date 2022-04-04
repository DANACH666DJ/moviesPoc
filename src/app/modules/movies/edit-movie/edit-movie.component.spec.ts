import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule  } from '@angular/router/testing';

import { EditMovieComponent } from './edit-movie.component';
import { MovieService } from '../../../services/movies.service';

describe('EditMovieComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
         EditMovieComponent
         ],
      providers: [
        MovieService
      ]
    })
    .compileComponents();
  });

  // propertys needed for testings
  function setup() {
    const fixture = TestBed.createComponent(EditMovieComponent);
    const component = fixture.debugElement.componentInstance;
    const moviesService = TestBed.inject(MovieService);

    return { fixture, component,  moviesService };
  }

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
