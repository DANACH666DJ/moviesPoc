import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  errorMessage: string;
  loading: boolean;
  moviesLoading: boolean;

  constructor(
    private readonly moviesService: MovieService,
    private readonly router: Router
    ) {
    this.movies = [];
    this.errorMessage = '';
    this.loading = true;
    this.moviesLoading = true;
   }

  ngOnInit(): void {
    // obtenemos el listado de peliculas para que se lance en el inicio del ciclo de vida del componente
    this.moviesService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        // una vez tengamos las peliculas cargadas desde el servicio, quitamos de la vista el loading
        this.moviesLoading = false;
        console.log(this.movies);
      },
      // tratamos el posible error del servicio, y en el caso que se lance, mostramos al usuario un mensaje informativo
      error: (err) => {
        console.error(err);
        Swal.fire({
          confirmButtonColor: '#e3d4a6',
          icon: 'error',
          title: 'Uups...',
          text: 'No se han podido cargar las peliculas!',
          footer: '<p>Puede recargar la página e intentarlo de nuevo</p>'
        })
        this.errorMessage = 'Lo sentimos, el listado de peliculas no esta disponible en este momento';
        this.loading = false;
        this.moviesLoading = false;
      },
      complete: () => console.info('complete')
   });
  }

}
