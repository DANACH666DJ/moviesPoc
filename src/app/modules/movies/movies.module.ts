import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

import { MovieService } from '../../services/movies.service';
import { NewMovieComponent } from './new-movie/new-movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    NewMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
