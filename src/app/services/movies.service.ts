import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';
  public httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // propiedad privada currentMoviesSubject que protege de la emisión de nuevos valores de nuestro estado
  private currentMoviesSubject: BehaviorSubject<Movie> = new BehaviorSubject({} as Movie);
  // este currentsMovies sera el encargado de que los componentes puedan suscribirse a los eventoe que emite el currentMoviesSubject
  public readonly currentsMovies$: Observable<Movie> = this.currentMoviesSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get<Movie[]>(`${this.apiUrl}`).pipe(
      map((res) => {
        console.info('getMovies() :: ', res);
        return res;
      }), catchError((error: any) => {
         console.log(error);
         return observableOf(error);
      }));;
  }

  updateMovie(movie: Movie) {
    return this.http.put(`${this.apiUrl}/${movie.id}`, JSON.stringify(movie), this.httpOpt).pipe(
      map((res) => {
        console.info('updateMovie() :: ', res);
        return res;
      }), catchError((error: any) => {
         console.log(error);
         return observableOf(error);
      }));;;
  }

  setCurrentMovie(currentMovie: Movie): void {
    this.currentMoviesSubject.next(currentMovie);
  }

  addmovie(movie: Movie) {
    return this.http.post(`${this.apiUrl}`, JSON.stringify(movie), this.httpOpt).pipe(
      map((res) => {
        console.info('addmovie() :: ', res);
        return res;
      }), catchError((error: any) => {
         console.log(error);
         return observableOf(error);
      }));;;
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      map((res) => {
        console.info('deleteMovie() :: ', res);
        return res;
      }), catchError((error: any) => {
         console.log(error);
         return observableOf(error);
      }));;;
  }
}
