import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test:string = 'assets/test.jpeg'
  batman:string = 'assets/batman.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}