import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
