import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'new-movie',
    component: NewMovieComponent
  },
  {
    path: 'edit-movie',
    component: EditMovieComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
