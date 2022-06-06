import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo:string = '/assets/logo.svg'
  search:string = 'assets/search.svg'
  constructor() { }

  ngOnInit(): void {
  }

}
