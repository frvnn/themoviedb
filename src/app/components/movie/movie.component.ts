import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/interface/staff.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  datos: Movie = {
    id: 0,
    title: '',
    poster_path: '',
    overview: '',
    vote_average: 0,
  }

  staff: Staff = {
    id: 0,
    name: '',
    profile_path: '',
  }

  id = '';

  staffList: Staff[] = [];

  constructor( private movieService:MovieService, private router: Router, private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getMovie(this.id)
    this.getStaff(this.id)
  }

  getMovie(id) {
    this.movieService.getMovie(id).subscribe((data: any) => {
        this.datos = data
      })
    }

  getStaff(id){
    this.movieService.getCredits(id).subscribe((data:any) =>{
      this.staffList = data.cast
    })
  }
}
