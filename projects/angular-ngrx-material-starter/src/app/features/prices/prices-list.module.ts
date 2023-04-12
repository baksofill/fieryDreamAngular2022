import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PricesListComponent } from './prices-list/prices-list.component';
import { PricesListRoutingModule } from './prices-list-routing.module';
import { ProgramsDetailComponent } from './programs-detail/programs-detail.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ProgramsPreviewComponent } from './programs-preview/programs-preview.component';
import { DemoTabComponent } from './demo-tab/demo-tab.component';

@NgModule({
  declarations: [PricesListComponent, ProgramsDetailComponent, ProgramsPreviewComponent, DemoTabComponent],
  imports: [CommonModule, SharedModule, PricesListRoutingModule, GalleryModule]
})
export class PricesListModule {}
