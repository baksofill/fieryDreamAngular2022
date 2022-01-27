import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PricesListComponent } from './prices-list/prices-list.component';
import { PricesListRoutingModule } from './prices-list-routing.module';

@NgModule({
  declarations: [PricesListComponent],
  imports: [CommonModule, SharedModule, PricesListRoutingModule]
})
export class PricesListModule {}
