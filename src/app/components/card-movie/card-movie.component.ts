import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie.model';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie: Movie = {
    id: 0,
    title: '',
    poster_path: '',
    overview: '',
    vote_average: 0,
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie)
  }

}
