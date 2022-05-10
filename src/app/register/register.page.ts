import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../User/user';
import { AuthService } from '../Services/Auth-service';
import { LoadingController,AlertController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { userInfo } from 'os';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  usr : User;


  constructor(private router : Router , private authService : AuthService) {
    
   }

  ngOnInit() {
  }
 

 signUp(email,password){
     this.authService.RegisterUser(email.value,password.value).then((res) =>
      {

        //Register User in firestore collection
        //Name is giving me null   naugalloummonno-9134@yopmail.com
        
        this.authService.setUser({
          displayName :res.user.displayName,
          uid :res.user.uid,
          email:res.user.email,
          //subscriptions : null
        })

        this.authService.afStore.doc(`profile/${this.authService.getUID()}`).set({
          name :res.user.displayName,
          email : res.user.email,
         // subscriptions : null
        });
        //ENDS HERE !!!

       this.authService.SendVerificationMail();
       this.router.navigate(['emailValidation']);
      }).catch((error) =>{
         window.alert(error.message)});
      }

      //ANOTHER ALTERNATIVE
}

