import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component'

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'newMovie',
    component: NewMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
