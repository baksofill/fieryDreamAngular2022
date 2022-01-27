import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Feature, features } from '../prices-list.data';

@Component({
  selector: 'fd-prices-list',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PricesListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}