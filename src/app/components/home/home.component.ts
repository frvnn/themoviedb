import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlayingList:any[] = [];

  test:string = 'assets/test.jpeg'
  batman:string = 'assets/batman.jpg'

  constructor(private movieService : MovieService) { }

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
