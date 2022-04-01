import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../../../services/movies.service';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  newMovieForm: FormGroup;
  movie!: Movie;

  constructor(private readonly fb: FormBuilder, private readonly moviesService: MovieService) {
    this.newMovieForm =  this.fb.group({
      title: [''],
      poster: [''],
      genre: [[]],
      actors: [[]],
      year: [undefined],
      duration : [undefined],
      imdbRating : [undefined]
    });
  }

  ngOnInit(): void {
  }

  addMovie(){
    console.log(this.newMovieForm.get("title")?.value)
    console.log(this.newMovieForm.get("poster")?.value)
    console.log(this.newMovieForm.get("genre")?.value)
    console.log(this.newMovieForm.get("actors")?.value)
    console.log(this.newMovieForm.get("duration")?.value)
    console.log(this.newMovieForm.get("imdbRating")?.value)
    //this.movie.title = this.newMovieForm.get("tittle");
     // obtenemos el listado de peliculas para que se lance en el inicio del ciclo de vida del componente
     /*this.moviesService.addmovie().subscribe({
      next: (movies) => {

      },
      // tratamos el posible error del servicio, y en el caso que se lance, mostramos al usuario un mensaje informativo
      error: (err) => {
        console.error(err);

      },
      complete: () => console.info('complete')
   })*/

  }

}
