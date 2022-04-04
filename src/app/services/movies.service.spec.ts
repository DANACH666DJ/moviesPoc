import { TestBed } from '@angular/core/testing';
import { MovieService } from './movies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../models/movie.model';

describe('MoviesService', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MovieService
      ]
    })
    .compileComponents();
  });

   // propertys needed for testings
   function setup() {
    const moviesService = TestBed.inject(MovieService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    return { moviesService, httpTestingController };
  }
  it('should be created', () => {
    const { moviesService } = setup();
    expect(moviesService).toBeTruthy();
  });

  it('should getMovies success', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies';
    const mockMovies = {
      movies: [
        {
          id: 1,
          title: "Dancing Lady",
          poster: "https://m.media-amazon.com/images/I/519bDpIai9L._SY445_.jpg",
          genre: [
            "Comedy",
            "Musical",
            "Romance"
          ],
          year: 2006,
          duration: 161,
          imdbRating: 8.27,
          actors: [
            4,
            5,
            6
          ]
        }

      ]
    };
    // Se realiza la petición
    moviesService.getMovies().subscribe(data => {
      expect(data).toBe(mockMovies);
    })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });

  it('should getMovies error', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies';

    // Se realiza la petición
    moviesService.getMovies().subscribe((error: any) => (data: any) => fail('Should have failed with 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.error).toContain('404 error');
  })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });


  it('should updateMovie success', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies/1';
    const mockMovie =
        {
          id: 1,
          title: "Dancing Lady",
          poster: "https://m.media-amazon.com/images/I/519bDpIai9L._SY445_.jpg",
          genre: [
            "Comedy",
            "Musical",
            "Romance"
          ],
          year: 2006,
          duration: 161,
          imdbRating: 8.27,
          actors: [
            "4",
            "5",
            "6"
          ]
        };
    // Se realiza la petición
    moviesService.updateMovie(mockMovie).subscribe(data => {
      expect(data).toBe(mockMovie);
    })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('PUT');
    req.flush(mockMovie);
  });

  it('should updateMovie error', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies/1';

    const mockMovie =
        {
          id: 1,
          title: "Dancing Lady",
          poster: "https://m.media-amazon.com/images/I/519bDpIai9L._SY445_.jpg",
          genre: [
            "Comedy",
            "Musical",
            "Romance"
          ],
          year: 2006,
          duration: 161,
          imdbRating: 8.27,
          actors: [
            "4",
            "5",
            "6"
          ]
        };

    // Se realiza la petición
    moviesService.updateMovie(mockMovie).subscribe((error: any) => (data: any) => fail('Should have failed with 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.error).toContain('404 error');
  })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('PUT');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });

  it('should addmovie success', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies';
    const mockMovie =
        {
          id: 1,
          title: "Dancing Lady",
          poster: "https://m.media-amazon.com/images/I/519bDpIai9L._SY445_.jpg",
          genre: [
            "Comedy",
            "Musical",
            "Romance"
          ],
          year: 2006,
          duration: 161,
          imdbRating: 8.27,
          actors: [
            "4",
            "5",
            "6"
          ]
        };
    // Se realiza la petición
    moviesService.addmovie(mockMovie).subscribe(data => {
      expect(data).toBe(mockMovie);
    })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush(mockMovie);
  });

  it('should addmovie error', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies';

    const mockMovie =
        {
          id: 1,
          title: "Dancing Lady",
          poster: "https://m.media-amazon.com/images/I/519bDpIai9L._SY445_.jpg",
          genre: [
            "Comedy",
            "Musical",
            "Romance"
          ],
          year: 2006,
          duration: 161,
          imdbRating: 8.27,
          actors: [
            "4",
            "5",
            "6"
          ]
        };

    // Se realiza la petición
    moviesService.addmovie(mockMovie).subscribe((error: any) => (data: any) => fail('Should have failed with 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.error).toContain('404 error');
  })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });





  it('should deleteMovie success', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies/1';

    // Se realiza la petición
    moviesService.deleteMovie(1).subscribe(data => {
      expect(data).toBe(1);
    })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('DELETE');
    req.flush(1);
  });

  it('should deleteMovie error', () => {
    const { moviesService, httpTestingController } = setup();

    const url = 'http://localhost:3000/movies/1';


    // Se realiza la petición
    moviesService.deleteMovie(1).subscribe((error: any) => (data: any) => fail('Should have failed with 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.error).toContain('404 error');
  })
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('DELETE');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });





});
