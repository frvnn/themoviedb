import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Movie } from 'src/app/interface/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Cartelera';

  datos: Movie = {
    id: 0,
    title: '',
    poster_path: 'https://image.tmdb.org/t/p/w500',
    overview: '',
    vote_average: 0,
  }

  id= ''

  nowPlayingList:Movie[] = [];
  topRatedList:Movie[] = [];

  test:string = 'assets/test.jpeg'

  constructor(private movieService : MovieService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getNowPlaying()
    this.getTopRated()

    this.id = this.route.snapshot.paramMap.get('id')

  }

  goToMovie(id:number) {
    this.router.navigate(['/movie',id])
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
