import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  datos: Movie = {
    id: 0,
    title: '',
    poster_path: 'https://image.tmdb.org/t/p/w500/7QPeVsr9rcFU9Gl90yg0gTOTpVv.jpg',
    overview: '',
    vote_average: 0,
    actor: '',
  }

  movie:string = '/assets/movie.png'
  batman:string = 'assets/batman.jpg'

  constructor( private movieService:MovieService ) {


  }

  ngOnInit(): void {
    this.getMovie(508)
  }

  getMovie(movie_id) {
    this.movieService.getMovie(movie_id).subscribe((data: any) => {
        console.log(data)
        this.datos = data
      })
    }
}
