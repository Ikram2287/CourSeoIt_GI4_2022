import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFormationPage } from './list-formation.page';

const routes: Routes = [
  {
    path: '',
    component: ListFormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFormationPageRoutingModule {}
