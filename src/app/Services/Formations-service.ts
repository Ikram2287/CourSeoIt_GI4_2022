import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import 'firebase/firestore';
import { Formation } from '../Formation';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class FormationsService{
  coursesCollection : AngularFirestoreCollection;

   formationList : Observable<any[]>;
    constructor(private firestore : AngularFirestore,public router: Router){
    }
        getAllFormation(){
              this.formationList = this.firestore.collection('/Courses').valueChanges();
             return this.formationList;
             ;
    }
    
    /*getFormationById(idFormation : number){
      for(const item in this.formationList){
          if(item.id == idFormation){
            return item;
          }
          else{
            throw new Error('The course is not availble');
          }
      }
    }*/
    getFormationByName(nameFormation : string){
      return this.firestore.collection('/Courses').doc(nameFormation).valueChanges();
    }
    
    getFormationById(idFormation: number,nameFormation : string){
      return this.firestore.collection('/Courses').doc(nameFormation).valueChanges(idFormation);
    }
    /*SubscribeOrUnsubscribe(option : 'subscribe | unsubscribe' , id : number) : void{

    }*/


}
