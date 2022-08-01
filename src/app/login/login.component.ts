import { Component, OnInit } from '@angular/core';
import User from '../user';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = {
    userName: "",
    password: "",
    _id: "",
  };
  public warning: string = "";
  public loading: boolean = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}
    onsubmit(){
      if(this.user.userName != "" && this.user.password != ""){
        this.loading = true;
        this.auth.login(this.user).subscribe(
          {next: (data) => {
            this.loading = false;
            localStorage.setItem('access_token', data.token);
            this.router.navigate(['/newRelease']);
          },error: (err) => {
            this.loading = false;
            this.warning = "Cannot retrieve the data";
          }}
        )
      }
    }
  }
