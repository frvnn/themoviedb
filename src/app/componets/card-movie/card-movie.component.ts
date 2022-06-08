import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie.model';
import { Router, ActivatedRoute } from '@angular/router';


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

  IMG_URL:string = 'https://image.tmdb.org/t/p/w500'
  id = ''

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
  }
/*   rating:number = this.movie.vote_average
 */

  goToMovie(id:number) {
    this.router.navigate(['/movie',id])
  }

}
