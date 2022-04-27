import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router , private authService : AuthService) { }

  ngOnInit() {
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          //if (res.user){
        this.router.navigate(['list-formation']);          
        } else {
         window.alert('Incorrect data ! please try again...')
          return false;
       }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  toRegister() : void{
    this.router.navigate(['register']);
  }

}
