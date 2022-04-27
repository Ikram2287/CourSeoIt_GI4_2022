import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationsService } from '../Services/Formations-service';
import { Formation } from './Formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.page.html',
  styleUrls: ['./formation.page.scss'],
})
export class FormationPage implements OnInit {
@Input() formation! :Formation;
  constructor(private formService:FormationsService, private router:Router) { }

  ngOnInit() {
  }
  onViewFormation() : void {
    this.router.navigateByUrl(`formations/${this.formation.id}`)
  }

}
