import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interface/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Carteleraa';

  datos: Movie = {
    id: 0,
    title: '',
    poster_path: '',
    overview: '',
    vote_average: 0,
    actor: ''
  }

  nowPlayingList:any[] = [];
  topRatedList:any[] = [];

  test:string = 'assets/test.jpeg'
  batman:string = 'assets/batman.jpg'

  constructor(private movieService : MovieService) {

  }

  ngOnInit(): void {
    this.getNowPlaying()
    this.getTopRated()


  }

  getNowPlaying() {
    this.movieService.getNowPlaying().subscribe((data: any) => {
      this.nowPlayingList = data.results
      console.log(data.results)
    })
  }

  getTopRated() {
    this.movieService.getTopRated().subscribe((data:any) => {
      this.topRatedList = data.results
      console.log(data)
    })
  }
}
