import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  movies:any[] = [];


  logo:string = '/assets/logo.svg'
  search:string = 'assets/search.svg'


  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
  }

  getMovies(searchTerm: string) {
  this.movieService.searchMovies(searchTerm).subscribe(data => {
      this.movies = data.results
    })
  }

}
