import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { AuthService } from '../Services/Auth-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userSubscriptions
  userProfile: User;

  constructor( private angfs : AngularFirestore, private user: AuthService) { 
    const subscriptions = angfs.doc(`users/${user.getUID()}`);
    this.userSubscriptions = subscriptions.valueChanges();
  }

  ngOnInit() {
  }

}
