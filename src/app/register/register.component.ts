import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import RegisterUser from '../register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUser: RegisterUser = {
    userName: "",
    password: "",
    password2: "",
  };
  public warning: string = "";
  public success: boolean = false;
  public loading: boolean = false;
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {}
    
    onsubmit(){
      if(this.registerUser.userName.length == 0){
        this.success = false;
        this.loading = false;
        this.warning = 'Enter user name';
      } else if(this.registerUser.password == "" || this.registerUser.password2 == ""){
        this.success = false;
        this.loading = false;
        this.warning = 'Enter password';
      } else if(this.registerUser.password != this.registerUser.password2){
        this.success = false;
        this.loading = false;
        console.log("warning");
        this.warning = 'password does not much';
      }else{
        this.loading = true;
        this.auth.register(this.registerUser).subscribe(
        {complete: () => {
          this.success = true;
          this.warning = "";
          this.loading = false;
        }, error: (err) => {
          this.success = false;
          this.warning = err.error.message;
          this.loading = false;
        }}
      )
    }
  }
}
