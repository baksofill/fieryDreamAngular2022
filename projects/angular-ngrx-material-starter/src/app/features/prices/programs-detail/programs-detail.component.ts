import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fd-programs-detail',
  templateUrl: './programs-detail.component.html',
  styleUrls: ['./programs-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
