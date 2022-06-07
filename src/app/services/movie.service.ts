import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // API KEY : 43004227847cd84708834743b57b6c1d

  private API_URL:string = 'https://api.themoviedb.org/3';
  private API_KEY:string = '?api_key=43004227847cd84708834743b57b6c1d';

  constructor(private http:HttpClient) { }

  getNowPlaying(): Observable<any> {
    return this.http.get(this.API_URL + '/movie/now_playing' + this.API_KEY);
  }

  getMovies(query: string): Observable<any> {
    return this.http.get(this.API_URL + '/search/movie' + this.API_KEY + '&query=' + query);
  }
}
