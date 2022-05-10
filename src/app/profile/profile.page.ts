import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth, User } from 'firebase/auth';
import { AuthService } from '../Services/Auth-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  
  logged : Boolean = false;
  uid : string;
  userMail :string;
  pressed :Boolean =false;
  pressedSub: boolean = false;

 

constructor( private authServ: AuthService,private router: Router,private route :ActivatedRoute) { 
  
  
  }

  ngOnInit() {

  this.logged = this.authServ.onProfile();

}
  onAboutMe(){
    if(this.pressed === false){
    this.pressed = true;
    //Move to oninit if not working 
    if(this.logged){
      //userid
      
      this.authServ.ngFireAuth.currentUser.then((user )=> {
        this.uid = user.uid
      });
    
     }
      this.authServ.afStore.collection('profile').snapshotChanges(['added']).subscribe(actions =>{
        actions.forEach(action =>{
          if(action.payload.doc.id == this.uid){
              this.userMail = action.payload.doc.data()['email'];
          }
    })
  });}
  else{
    this.pressed = false;
  }

  }
  onSubscriptions(){

    if(this.pressedSub === false){
      this.pressedSub = true;

    }
    else{
      this.pressedSub =false;
    }

  }
  onResetPassword(){
    this.router.navigate(['reset-password']);
  }
  


}
