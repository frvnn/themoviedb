import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'movie',
    component:MovieComponent
  },
  {
    path:'search',
    component:CardMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
