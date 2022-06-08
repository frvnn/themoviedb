import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  id = '';


  movie:string = '/assets/movie.png'
  batman:string = 'assets/batman.jpg'

  constructor( private movieService:MovieService, private router: Router, private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getMovie(this.id)
  }

  getMovie(id) {
    this.movieService.getMovie(id).subscribe((data: any) => {
        console.log(data)
        this.datos = data
      })
    }
}
