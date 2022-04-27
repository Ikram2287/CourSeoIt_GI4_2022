import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailValidationPageRoutingModule } from './email-validation-routing.module';

import { EmailValidationPage } from './email-validation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailValidationPageRoutingModule
  ],
  declarations: [EmailValidationPage]
})
export class EmailValidationPageModule {}
