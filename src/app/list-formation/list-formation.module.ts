import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFormationPageRoutingModule } from './list-formation-routing.module';

import { ListFormationPage } from './list-formation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFormationPageRoutingModule
  ],
  declarations: [ListFormationPage]
})
export class ListFormationPageModule {}
