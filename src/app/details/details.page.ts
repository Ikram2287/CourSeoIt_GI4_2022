import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Formation } from '../formation/Formation';
import { AuthService } from '../Services/Auth-service';
import { FormationsService } from '../Services/Formations-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 
 /* item:Observable<any>;
  tmp :String;
  
  id !: number 
  name! : string 
  description! : string;
  price! : number;
  duree? : number;
  dateDebut! : Date;*/

  passedId : number;
  nameFormation :string;
  descriptionFormation :string;
  priceFormation : number;
  dateDebutFormation : Date;
  duree? : number;
  
  
  constructor(private router: Router,private authService : AuthService,private route :ActivatedRoute,private firestore :AngularFirestore, private fromService :FormationsService) {

    /*To view each course i need to unncomment this and the one bellow
    *this.tmp = this.route.snapshot.paramMap.get("name");
    const formName =+this.route.snapshot.params['id'];
    this.item = this.fromService. getFormationById(formName,this.name);*/
     this.passedId =+this.route.snapshot.params['id'];
    }

  ngOnInit() {
    /*this.fs.collection('/Courses').snapshotChanges(['added'])
     .subscribe(actions => {
        actions.forEach(action => {

          if (this.tmp == action.payload.doc.data()['name']) {
            this.name = action.payload.doc.data()['title'];
            this.description = action.payload.doc.data()['description'];
            this.price = action.payload.doc.data()['price'];
          }
          //console.log('item: ' + action.payload.doc.data()['learn2']); 
           
        });
    });*/
    this.firestore.collection('Courses').snapshotChanges(['added']).subscribe(actions =>{
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
   
}
onSubscribe(){
  this.router.navigateByUrl('login');
}

}
