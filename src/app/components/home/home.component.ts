import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Carteleraa';

  public movie: Movie;

  nowPlayingList:any[] = [];

  test:string = 'assets/test.jpeg'
  batman:string = 'assets/batman.jpg'

  constructor(private movieService : MovieService) {
    this.movie = {
      id: 0,
      title: '',
      poster_path: '',
      overview: '',
      vote_average: 0,
      actor: ''
    }
    console.log(this.movie);
  }

  ngOnInit(): void {
    this.getNowPlaying()


  }

  getNowPlaying() {
    this.movieService.getNowPlaying().subscribe(data => {
      this.nowPlayingList = data.results
      console.log(data.results)
    })
  }
}
