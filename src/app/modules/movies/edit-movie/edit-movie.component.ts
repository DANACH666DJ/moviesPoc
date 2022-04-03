import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  { Router } from '@angular/router';
import { Movie } from '../../../models/movie.model';
import Swal from 'sweetalert2';
import { MovieService } from '../../../services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  editMovieForm: FormGroup;
  editMoviesLoading: boolean;
  loadImage: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly moviesService: MovieService,
    private readonly router: Router

  ) {
    this.editMovieForm =  this.fb.group({
      title: ['', Validators.required],
      poster: ['', Validators.required],
      genre: ['', Validators.required],
      actors: ['', Validators.required],
      year: [undefined, Validators.required],
      duration : [undefined, Validators.required],
      imdbRating : [undefined, Validators.required]
    });
    this.movie = {};
    this.editMoviesLoading = false;
    this.loadImage = true;
   }

  ngOnInit(){
    // obtenemos la pelicula seleccionada del estado de la ruta
    this.movie = history.state.movie;
    // si la pelicula no tuviera una url o viniera a null para mostrar la imagen, mostraríamos la imagen de imagen no encontrada
    if(this.movie.poster === '' || this.movie.poster === null) {
      this.loadImage = false;

    }
    console.log('moviee select: ', this.movie);
    // seteamos todos los valores de la pelicula seleccionada en el formulario
    this.setEditValue();
  }


  setEditValue() {
    this.editMovieForm.get("title")?.setValue(this.movie.title);
    this.editMovieForm.get("poster")?.setValue(this.movie.poster);
    //this.editMovieForm.get("genre")?.setValue(this.movie.genre);
    //this.editMovieForm.get("actors")?.setValue(this.movie.actors);
    this.editMovieForm.get("year")?.setValue(this.movie.year);
    this.editMovieForm.get("duration")?.setValue(this.movie.duration);
    this.editMovieForm.get("imdbRating")?.setValue(this.movie.imdbRating);
  }


  addGenre() {
    // comprobamos que en el input el usuario haya introducido algún genero
    if(this.editMovieForm.get("genre")?.value !== '') {
      // lo añadimos a la lista de generos
      this.movie.genre?.push(this.editMovieForm.get("genre")?.value);
      // reseteamos el input
      this.editMovieForm.get("genre")?.setValue('');
    }
  }


  addActor() {
    // comprobamos que en el input el usuario haya introducido algún actor
    if(this.editMovieForm.get("actors")?.value !== '') {
      // lo añadimos a la lista de actores
      this.movie.actors?.push(this.editMovieForm.get("actors")?.value);
      // reseteamos el input
      this.editMovieForm.get("actors")?.setValue('');
    }
  }

  editMovie() {
    // seteamos todos los datos de la peliculas con los datos del formulario
    this.movie.title = this.editMovieForm.get("title")?.value;
    this.movie.poster = this.editMovieForm.get("poster")?.value;
    this.movie.year = this.editMovieForm.get("year")?.value;
    this.movie.duration = this.editMovieForm.get("duration")?.value;
    this.movie.imdbRating = this.editMovieForm.get("imdbRating")?.value;
    // lanzamos el modal que preguntara al usuario si desea modificar la pelicula
    Swal.fire({
      confirmButtonColor: '#008000',
      title: 'Seguro que desea editar esta pelicula?',
      showCancelButton: true,
      confirmButtonText: 'Editar'
    }).then((result) => {
      // si el usuario pulso en el boton de editar lanzamos la petición del update y lanzamos el spinner de carga de servicio
      if (result.isConfirmed) {
        this.editMoviesLoading = true;
        // obtenemos el listado de peliculas para que se lance en el inicio del ciclo de vida del componente
        this.moviesService.updateMovie(this.movie).subscribe({
          next: (movie) => {
            console.info("Se modifico correctamente la pelicula: ", movie);
            Swal.fire('Se edito la pelicula!', '', 'success');
            // si se edito la película con éxito, navegamos al listado de peliculas para poder visualizar el cambio
            this.router.navigate(['']);
            this.editMoviesLoading = false;
            },
            // tratamos el posible error del servicio, y en el caso que se lance, mostramos al usuario un mensaje informativo
            error: (err) => {
              console.error('No se pudo modificar la pelicula', err);
              Swal.fire({
                confirmButtonColor: '#e3d4a6',
                icon: 'error',
                title: 'Uups...',
                text: 'No se ha podido modificar la pelicula!',
                footer: '<p>Puede intentarlo de nuevo en un momento</p>'
              });
              this.editMoviesLoading = false;

            },
            complete: () => console.info('complete')
        });
      }
    })
  }

  deleteMovie() {
    console.log("deleteMovie MOVIEEE");

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Desea elimiar esta pelicula?',
      text: "Una vez eliminada, no podrá recuperarla!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, quiero borrarla!',
      cancelButtonText: 'No, deseo mantenerla!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.editMoviesLoading = true;

        this.moviesService.deleteMovie(Number(this.movie.id)).subscribe({
          next: (movie) => {
            console.info("Se modifico correctamente la pelicula: ", movie);
            swalWithBootstrapButtons.fire(
              'Pelicula eliminada!',
              'Tu pelicula ha sido elminada.',
              'success'
            )
            // si se edito la película con éxito, navegamos al listado de peliculas para poder visualizar el cambio
            this.router.navigate(['']);
            this.editMoviesLoading = false;
            },
            // tratamos el posible error del servicio, y en el caso que se lance, mostramos al usuario un mensaje informativo
            error: (err) => {
              console.error('No se pudo borrar la pelicula', err);
              Swal.fire({
                confirmButtonColor: '#e3d4a6',
                icon: 'error',
                title: 'Uups...',
                text: 'No se ha podido borrar la pelicula!',
                footer: '<p>Puede intentarlo de nuevo en un momento</p>'
              });
              this.editMoviesLoading = false;

            },
            complete: () => console.info('complete')
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu pelicula no fue eliminada :)',
          'error'
        )
      }
    })
  }

}
