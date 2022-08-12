/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Nozomi Tsuchiya    Student ID: 154666192   Date: 2022/08/04
*
* Angular App (Deployed) Link: https://frabjous-kringle-42b423.netlify.app
*
* User API (Heroku) Link: https://whispering-eyrie-06300.herokuapp.com/
*
********************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'web422-a6';
  searchString: string | undefined;
  token: any;

  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) =>{
      if(event instanceof NavigationStart){
        this.token = this.auth.readToken();
      }
    }

    )
  }

  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}