import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MoviesRoutingModule
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
