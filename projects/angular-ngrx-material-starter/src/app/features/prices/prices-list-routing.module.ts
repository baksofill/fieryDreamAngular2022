import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricesListComponent } from './prices-list/prices-list.component';

const routes: Routes = [
  {
    path: '',
    component: PricesListComponent,
    data: { title: 'fd.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricesListRoutingModule {}
