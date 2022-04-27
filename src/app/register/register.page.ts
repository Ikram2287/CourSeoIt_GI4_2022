import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router : Router , private authService : AuthService) { }

  ngOnInit() {
  }
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value).then((res) =>
    {
        //redirecting or something
        this.authService.SendVerificationMail()
        this.router.navigate(['emailValidation']);
    }).catch((error) =>{
      window.alert(error.message)})
    }

}
