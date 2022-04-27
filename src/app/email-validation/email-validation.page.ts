import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth-service';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.page.html',
  styleUrls: ['./email-validation.page.scss'],
})
export class EmailValidationPage implements OnInit {

  constructor(    public authService: AuthService) { }

  ngOnInit() {
  }

}
