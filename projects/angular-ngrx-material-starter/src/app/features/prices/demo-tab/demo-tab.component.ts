import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fd-demo-tab',
  templateUrl: './demo-tab.component.html',
  styleUrls: ['./demo-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
