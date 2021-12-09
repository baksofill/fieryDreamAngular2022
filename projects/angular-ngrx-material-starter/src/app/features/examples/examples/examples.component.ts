import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'fd-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'fd.examples.menu.todos' },
    { link: 'stock-market', label: 'fd.examples.menu.stocks' },
    { link: 'theming', label: 'fd.examples.menu.theming' },
    { link: 'crud', label: 'fd.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'fd.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'fd.examples.menu.form' },
    { link: 'notifications', label: 'fd.examples.menu.notifications' },
    { link: 'elements', label: 'fd.examples.menu.elements' },
    { link: 'authenticated', label: 'fd.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
