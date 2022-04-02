import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../services/movies.service';
import { Movie } from '../../../models/movie.model';
import  { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  newMovieForm: FormGroup;
  movie: Movie ;
  genres: Array<string>;
  actors: Array<string>;
  disabledFilms: boolean;
  addMoviesLoading: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly moviesService: MovieService,
    private readonly router: Router

     ) {
    this.newMovieForm =  this.fb.group({
      title: ['', Validators.required],
      poster: ['', Validators.required],
      genre: ['', Validators.required],
      actors: ['', Validators.required],
      year: [undefined, Validators.required],
      duration : [undefined, Validators.required],
      imdbRating : [undefined, Validators.required]
    });
    this.movie = {}
    this.genres = [];
    this.actors = [];
    this.disabledFilms = true;
    this.addMoviesLoading = false;
  }

  ngOnInit(): void {
  }

  addGenre() {
    // comprobamos que en el input el usuario haya introducido algún genero
    if(this.newMovieForm.get("genre")?.value !== '') {
      // lo añadimos a la lista de generos
      this.genres.push(this.newMovieForm.get("genre")?.value);
      // reseteamos el input
      this.newMovieForm.get("genre")?.setValue('');
    }
  }


  addActor() {
    // comprobamos que en el input el usuario haya introducido algún actor
    if(this.newMovieForm.get("actors")?.value !== '') {
      // lo añadimos a la lista de actores
      this.actors.push(this.newMovieForm.get("actors")?.value);
      // reseteamos el input
      this.newMovieForm.get("actors")?.setValue('');
    }

  }

  addMovie(){
    // activamos el icono de carga
    this.addMoviesLoading = true;
    console.log(this.newMovieForm.get("title")?.value)
    // seteamos todos los datos de la peliculas con los datos del formulario
    this.movie.title = this.newMovieForm.get("title")?.value;
    this.movie.poster = this.newMovieForm.get("poster")?.value;
    this.movie.genre = this.genres;
    this.movie.actors = this.actors;
    this.movie.year = this.newMovieForm.get("year")?.value;
    this.movie.duration = this.newMovieForm.get("duration")?.value;
    this.movie.imdbRating = this.newMovieForm.get("imdbRating")?.value;

    console.log(this.movie)
     // obtenemos el listado de peliculas para que se lance en el inicio del ciclo de vida del componente
     this.moviesService.addmovie(this.movie).subscribe({
      next: (movie) => {
        console.info("Se añadio una nueva pelicula: ", movie);
        // informamos al usuario que el agregado ha ido correctamente
        Swal.fire({
          confirmButtonColor: '#e3d4a6',
          position: 'center',
          icon: 'success',
          title: 'Película agregada, redirigiendo al listado...',
          showConfirmButton: false,
          timer: 1500
        });
        // si se añadio la película con éxito, navegamos al listado de peliculas para poder visualizarla
        this.router.navigate(['']);
        this.addMoviesLoading = false;
      },
      // tratamos el posible error del servicio, y en el caso que se lance, mostramos al usuario un mensaje informativo
      error: (err) => {
        console.error('No se pudo añadir la pelicuas', err);
        Swal.fire({
          confirmButtonColor: '#e3d4a6',
          icon: 'error',
          title: 'Uups...',
          text: 'No se ha podido añadir la pelicula!',
          footer: '<p>Puede intentarlo de nuevo en un momento</p>'
        });
        this.addMoviesLoading = false;

      },
      complete: () => console.info('complete')
   })

  }

}
