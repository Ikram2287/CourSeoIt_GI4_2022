import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { Formation } from '../Formation';
import { AuthService } from '../Services/Auth-service';
import { FormationsService } from '../Services/Formations-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 
  passedId : number;
  
  nameFormation :string;
  descriptionFormation :string;
  priceFormation : number;
  dateDebutFormation : Date;
  duree? : number;
  
  //addedFormation : Formation ;

  userId : string;
  userMail : string;

  buttonText : string;
  text : string;
  
  //courseID : number;
  
  constructor(private router: Router,private authService : AuthService,private route :ActivatedRoute, private fromService :FormationsService) {
    this.passedId =+this.route.snapshot.params['id'];

    }

  ngOnInit() {


    //this.buttonText = "SUBSCRIBE TO THE COURSE";
    this.buttonText = this.getButtonText();

    this.authService.afStore.collection('Courses').snapshotChanges(['added']).subscribe(actions =>{
        actions.forEach(action =>{
          if(action.payload.doc.data()['id'] == this.passedId){
              this.nameFormation = action.payload.doc.data()['name'];
              this.descriptionFormation = action.payload.doc.data()['description'];
              this.priceFormation = action.payload.doc.data()['price'];
              this.dateDebutFormation =action.payload.doc.data()['dateDebut'].toDate();
            if(action.payload.doc.data()['duree']){
                this.duree = action.payload.doc.data()['duree'];
              }
          }
    })
    });

    console.log("I'm here 1 ");



    //retrieving user id if logged in
    if(this.authService.isLoggedIn){
      console.log("I'm here 2");

      this.authService.ngFireAuth.currentUser.then((user)=>{
        this.userId = user.uid;
      })
      console.log("I'm here 3 ");

       
  }}
onSubscribe(){
 
  if(this.authService.isLoggedIn) {
  //TODO : TRY TO CREATE A COLLECTION OF SUBSCRIPTIONS WITH THE ID OF THE USER*

    //Subscription table should contain userId+ id of the course he is subscribed 
              
    //Not Working , it sets the old course to a new one 
      /*this.authService.afStore.doc(`Sub/${this.userId}`).set({
          courseId : this.passedId
      })*/

    //OR : this way adds a collection called subscription inside the user doc each new subscription has a new id auto generated
    
    //profile -> subscription -> subscriptionId -> courseId + other info
    
        if(this.buttonText === 'SUBSCRIBE TO THE COURSE'){
          this.buttonText = 'UNSUBSCRIBE';

          this.authService.afStore.doc(`profile/${this.userId}`).collection('subscriptions').add({
            courseId : this.passedId, 
            name : this.nameFormation,
            starts : this.dateDebutFormation,
            price : this.priceFormation
          })
          console.log("come on change text");
          console.log(" text changed");

        }
        if( this.buttonText === 'UNSUBSCRIBE') {
          //delete from database   
          this.authService.afStore.collection('profile').doc(this.userId).collection('subscriptions').doc()
          this.buttonText = 'SUBSCRIBE TO THE COURSE';
        }
    
  //ENDS HERE !!!
   

  }
  
  else{
    window.alert('Please login or sign up to continue');
    this.router.navigateByUrl('login');
  }
}
getButtonText() : string{
      this.authService.afStore.doc(`profile/${this.userId}`).collection('subscriptions').snapshotChanges(['added']).subscribe(actions =>{
  //this.authService.afStore.collection('profile').doc(this.userId).collection('subscriptions').snapshotChanges(['added']).subscribe(actions =>{
//firebase.firestore().collection('contacts').doc(contactId).get()

    console.log("I'm here");

    actions.forEach(action =>{
      console.log("I'm here 5");
      if(action.payload.doc.data()['courseId'] == this.passedId){
        console.log("I'm here6");
        
        this.text = 'UNSUBSCRIBE';
      }
      else{
        this.text = 'SUBSCRIBE TO THE COURSE';
      }
    })
  })
  
  
  return this.text;
}
}


 