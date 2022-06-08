import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // API KEY : 43004227847cd84708834743b57b6c1d

  BASE_URL:string = 'https://api.themoviedb.org/3'
  API_KEY:string = '?api_key=43004227847cd84708834743b57b6c1d'
  IMG_URL:string = 'https://image.tmdb.org/t/p/w500'
  

  constructor(private http:HttpClient) {
    console.log('servicio persona')

  }

  getNowPlaying(): Observable<any> {
    return this.http.get(this.BASE_URL + '/movie/now_playing' + this.API_KEY);
  }

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/search/movie${this.API_KEY}&query=${searchTerm}`);
  }
  getImages(image:string): Observable<any>{
    return this.http.get(`${this.IMG_URL}/${image}`)
  }

  getMovie(movie_id:number): Observable<any>{
    return this.http.get(`${this.BASE_URL}/movie/${movie_id}${this.API_KEY}`)
  }

  getCredits(movie_id:number): Observable<any>{
    return this.http.get(`${this.BASE_URL}/movie/${movie_id}/credits${this.API_KEY}`)
  }

  getTopRated():Observable<any>{
    return this.http.get(`${this.BASE_URL}/movie/top_rated${this.API_KEY}`)
  }
}
