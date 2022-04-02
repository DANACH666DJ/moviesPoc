import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  movie: Movie ;

  constructor(
    private readonly router: Router,
    private readonly activateRoute: ActivatedRoute
  ) {
    this.movie = {};
   }

  ngOnInit(): void {
    // obtenemos la pelicula seleccionada del estado de la ruta
    this.movie = history.state.movie;
    console.log('moviee select: ', this.movie)

    // you cant reach outside of subscribe this is async
  }

}
