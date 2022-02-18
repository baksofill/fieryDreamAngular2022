import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CommonConstants } from '../../../core/common-constants';

@Component({
  selector: 'fd-programs-detail',
  templateUrl: './programs-detail.component.html',
  styleUrls: ['./programs-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgramsDetailComponent implements OnInit {
  @Output() onGalleryTypeChanged = new EventEmitter<string>();

  galleryChosen: string = CommonConstants.OM;

  constructor() { }

  ngOnInit(): void {
  }

  changeGalleryImg(galaryType:string):void {
    this.galleryChosen = galaryType;
    this.onGalleryTypeChanged.emit(galaryType);
  }

}
