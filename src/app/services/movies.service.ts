import { Injectable } from '@angular/core';
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

  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return this.http.get<Movie[]>(`${this.apiUrl}`);
  }

  updateMovie(movie: Movie) {
    return this.http.put(`${this.apiUrl+'dasda'}/${movie.id}`, JSON.stringify(movie), this.httpOpt);
  }

  addmovie(movie: Movie) {
    return this.http.post(`${this.apiUrl}`, JSON.stringify(movie), this.httpOpt);
  }

  deleteMovie(id: Movie) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
