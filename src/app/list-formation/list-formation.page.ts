import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { Formation } from '../formation/Formation';
import 'firebase/firestore';
import { FormationsService } from '../Services/Formations-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth-service';


@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.page.html',
  styleUrls: ['./list-formation.page.scss'],
})
export class ListFormationPage implements OnInit {
//@Input() selectedFormation! :Formation;
  formations! : Observable<any[]>;
 // selectedFormation! :Formation;
  
  constructor(private formService : FormationsService, private router :Router, private authService :AuthService) { }

  ngOnInit() {
    this.formations = this.formService.getAllFormation();
  }
  
  /*onViewFormation() : void {
    this.router.navigateByUrl(`details/${this.selectedFormation.id}`);
  }*/
  

}
